# spire-aircraft-tracking-app

Use case
Connect to Spire’s AirSafe Tracking Stream API. Read the data for at least 10 minutes and perform the following processing steps:
● Create a positional density map with resolution 0.1x0.1 deg. Use fields latitude and longitude to determine the position of the aircraft. Suggest an appropriate way of presenting the map.
● Analyze number of target updates per aircraft (identified by icao_address field). Report the number of aircraft in the data sample, average number of target updates per aircraft and aircraft with smallest and biggest number of target updates.


Framework Used
•	Django 4.0.3 (Backend) – Python 3.10
•	Angular 13 (Frontend) – Typescript, SCSS, HTML

Database: SQLite 3

How to Run the App?

Please install the below prerequisites for macOS to run application

Requirements: 
•	Python 3.10.0
•	Node v16.13.0
•	NPM 8.1.0

1.Extract the folder named “spire_app”.

2.Go to folder “spire_app” ,Run “python3 -m venv djangoenv”  and “source djangoenv/bin/activate” to activate virtual environment or use “source env/bin/activate” to activate the existing env inside folder
3. Go inside folder airsafeTracking
4. Execute the following commands if you are using your own virtual environment otherwise no need go to step 5
    3.1 “pip install -r requirements.txt” to install all dependencies.
    3.2 “python manage.py makemigrations”  and “python manage.py migrate ”to make   database migration

5. After executing the above commands run “python3 manage.py runserver” to start the application. Access application  at http://127.0.0.1:8000/ 
	
Workflow

User can go to the website to view the last 10 minutes Aircraft  Target Updates. A countdown timer is shown  in UI which indicate how long user needs to wait to get the last 10 minutes processed target updates of aircraft from current time . The UI shows the below aircraft stats by analysing the target updates

•	A positional density map showing the position of the aircraft.
•	Total number of aircraft data processed in last 10 mins.
•	Average number of target updates sent per  aircraft
•	Aircraft with least number of target updates
•	Aircraft with most number of target updates

The below image shows pins which indicate the current position of aircraft in the map. The blue coloured pins are aircraft with normal target updates. The red coloured pins are with least target updates and green with most target updates

 
Backend Workflow

•	An aircraft model is used to store “icao_address”, longitude and latitude of aircraft. 
•	Spire’s AirSafe Tracking Stream API is used to get the target updates of aircraft every 10 minutes. 
•	Position token is used to get the continuous target updates from stream to avoid losing any messages 
•	Django’s database cache mechanism is used to store position token , last data sync time and updates available value to get latest updates.
•	Core Main File  & Function setResponse(time) & streamData(): airsafeTracking/airsafeTrackingSystem/views.py 

REST API Request & Response

GET: http://127.0.0.1:8000/v1/targets/aircrafts
