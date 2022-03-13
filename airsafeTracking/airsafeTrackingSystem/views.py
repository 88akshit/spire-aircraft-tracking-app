from django.http import HttpResponse, HttpResponseServerError, JsonResponse
from django.shortcuts import render
import json
import requests
import arrow
import threading
from .models import Aircraft
from django.core.cache import caches  

"""
    Return an html homepage for app
"""
def home(request):
    return render(request, 'home.html')

"""
    Return an HttpResponse which has  number of target updates per aircraft (identified by
    icao_address field) longitude , latitude for map respresentation of each aircraft , the
    number of aircraft in the data sample, average number of target updates per aircraft and
    aircraft with smallest and biggest number of target updates.   
"""
def get_aircraft_targets(request):
    try:
        cache = get_cache_client()
        update_avaiable = cache.get("update_avaiable")
        last_time_updated = cache.get("last_time_updated")

        if(update_avaiable == False ):
            
            current_utc_time = arrow.utcnow()
            
            if last_time_updated=='' or last_time_updated == None :
                # 10 minutes + 5 seconds threshold for next update
                next_update_Time = current_utc_time.shift(seconds=605)
                get_tracking_data()
            else:
                # last data sync + 5 seconds threshold for next update          
                next_update_Time = last_time_updated.shift(seconds=5)

            resp = setResponse(next_update_Time)

            print(f'Please wait until stream updates until finished')

            return JsonResponse(resp, status=200, safe=False)

        else:
            
            current_utc_time = arrow.utcnow()
            # 10 minutes + 5 seconds threshold for next update   
            next_update_Time = current_utc_time.shift(seconds=605)
            resp = setResponse(next_update_Time)
            get_tracking_data()
            cache.set("update_avaiable",False,9000) 
            return JsonResponse(resp, status=200, safe=False)
            
    except Exception as e:
        print(f'Exception seen while calling get aircraft targets : {e}')
        return HttpResponseServerError(e)

"""
    Stream the target updates for the aircraft for 10 minutes and stores in database
"""
def stream_data():
    cache = get_cache_client()

    position_token = cache.get("position_token")

    current_utc_time = arrow.utcnow()
    # Stream data for next 10 mins   
    last_time_updated = current_utc_time.shift(minutes=10)
    cache.set("last_time_updated",last_time_updated)
    print('Current time  ',current_utc_time)
    print('Stream till  ', last_time_updated)
   
    headers = {
        'Authorization': 'Bearer cWqfXAOGf7y850JGFQLMiwOUJlfAs8XV'
    }

    try:
        if position_token=='':
            print(f'Normal streaming')
            r = requests.get(
            f'https://api.airsafe.spire.com/v2/targets/stream?compression=none', headers=headers, stream=True)

        else:
            print(f'Position Token Streaming')
            r = requests.get(
                f'https://api.airsafe.spire.com/v2/targets/stream?compression=none&position_token={position_token}', headers=headers, stream=True)
    except requests.exceptions.RequestException as e:  
         print(f'Exception seen while calling the AirSafe Tracking Stream API : {e}')
    
    if r.iter_lines() != None:
        for line in r.iter_lines():
            # filter out keep-alive new lines
            if line:
                decoded_line = line.decode('utf-8')
                data = json.loads(decoded_line)
                if "position_token" in data:
                    position_token = data["position_token"]
                if "target" in data:
                    flight_name = data['target']['icao_address']
                    latitude = data['target']['latitude']
                    longitude = data['target']['longitude']
                    latest_timestamp = data["target"]['timestamp']
                    Aircraft.objects.create(time_stamp = latest_timestamp ,name = flight_name , lat = latitude, lon = longitude)
               
                if arrow.utcnow() > last_time_updated:
                    r.close()
                    cache.set("update_avaiable",True,9000)
                    cache.set("position_token",position_token,9000)
                    cache.set("last_time_updated",arrow.utcnow(),9000)
                    print(f'Stream stopped at {arrow.utcnow()}')
                    break
    
"""
    Return aircraft target update details from database for a period of  past 10 minutes from current utc time.
"""
def get_aircraft_details_from_db():
    aircraft_details = Aircraft.objects.all()
    current_utc_time = arrow.utcnow()
    flight_targets = []
    # Get Streamed data  from database for last 10 mins  
    last_time_updated = current_utc_time.shift(minutes=-10)
    print(f'looking for aircraft details between {last_time_updated} and {current_utc_time}')
    for aircraft in aircraft_details:
        if aircraft.time_stamp<current_utc_time and aircraft.time_stamp>last_time_updated:
                data = {}
                data['name'] = aircraft.name
                data['lat'] =  aircraft.lat
                data['lon'] =  aircraft.lon
                flight_targets.append(data)
    return flight_targets

"""
    Starts a thread which helps in streaming data via stream_data function and saving to database 
"""
def get_tracking_data():
    
    try:
        t1 = threading.Thread(target=stream_data, args=(),daemon=True)
        threading.current_thread()
        t1.start()
        print(f'Thread is started for streaming data {t1.getName()}')
    except Exception as e:
        print(f'Exception in starting thread : {e}')
        
"""
    Build the  response having  the number of aircraft in the data sample, average number of
    target updates per aircraft , aircraft with smallest and biggest number of target updates for last 10 mins
    for rendering in UI  
"""
def setResponse(time):
    aircraft__target_list =  get_aircraft_details_from_db()
    if len(aircraft__target_list)<1:
        print('No target data available for the time. Please wait')
        data = {'updates_available': False,
            'next_update': time.for_json(),
            'details':  []
        }
        return data
    flight_map = {}
    flight_target_updates = {}
    # Make a flight targets Map of all unique ICOA address with all target updates
    for flight in aircraft__target_list:
        if flight["name"] not in flight_map:
            temp_list = []
            temp_list.append(flight)
            flight_map[flight["name"]] = temp_list
            flight_target_updates[flight["name"]] = 0
        else:
            temp_list = flight_map.get(flight["name"])
            temp_list.append(flight)
            flight_target_updates[flight["name"]] = flight_target_updates.get(flight["name"]) +1
    
    #Get aircraft with maximum target updates
    max_target_update_aircraft = max(zip(flight_target_updates.values(), flight_target_updates.keys()))[1]
    #Get aircraft with minimum target updates
    min_target_update_aircraft = min(zip(flight_target_updates.values(), flight_target_updates.keys()))[1]

    #Get aircraft with average target updates
    average_target_updates_per_aircraft = sum(flight_target_updates.values()) / len(flight_target_updates)
  
    final_flight_data = []
    for name in flight_map.keys():
        temp_list = flight_map.get(name)
        final_flight_data.append(temp_list[len(temp_list)-1])
    #get aircraft's longitude and latitude  with  minimum target updates 
    min_flight_data = []
    temp = flight_map.get(min_target_update_aircraft)
    min_flight_data.append(temp[len(temp)-1])
    #get aircraft's longitude and latitude  with  maximum target updates 
    max_flight_data = []
    temp = flight_map.get(max_target_update_aircraft)
    max_flight_data.append(temp[len(temp)-1])
     

    data = {'updates_available': True,
                'next_update': time.for_json(),
                'details':  {
                    'total_number_of_aircrafts': len(flight_map),
                    'aircraft_details': final_flight_data,
                    'maximum_target_updates_aircraft': min_flight_data,
                    'minimum_target_updates_aircraft': max_flight_data,
                    'average_target_updates_per_aircraft': round(average_target_updates_per_aircraft),
                    }
                }
    return data

"""
    Return the cache client which stores position token , update available and last data sync values
"""
def get_cache_client():
    m_cache = caches.all()[0]
    return m_cache


