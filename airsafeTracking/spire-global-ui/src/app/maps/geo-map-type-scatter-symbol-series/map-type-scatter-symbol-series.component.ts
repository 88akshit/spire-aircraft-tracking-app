import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { MarkerType } from "igniteui-angular-charts";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicSymbolSeriesComponent
} from "igniteui-angular-maps";
import { interval, Subscription } from "rxjs";
import { TrackingService } from "src/app/tracking-service";

@Component({
  selector: "app-map-type-scatter-symbol-series",
  styleUrls: ["./map-type-scatter-symbol-series.component.scss"],
  templateUrl: "./map-type-scatter-symbol-series.component.html"
})

export class MapTypeScatterSymbolSeriesComponent implements AfterViewInit {

    @ViewChild("map", {static: true})
    public map: IgxGeographicMapComponent;
    @ViewChild("template", {static: true})
    public tooltip: TemplateRef<object>;

    public dDay = new Date('Feb 26 2022 21:00:00');
    public timeDifference =0;
    private subscription: Subscription;
    public totalNumberOfAircraft =0
    public leastTargetUpdatesAircraft = ''
    public mostTargetUpdatesAircraft = ''
    public averageTargetUpdatesPerAircraft = 0
    public updatesAvailable = false
    public sendRequest = false
    public symbolSeries = new IgxGeographicSymbolSeriesComponent ();
    public symbolMaxSeries = new IgxGeographicSymbolSeriesComponent ();
    public symbolMinSeries = new IgxGeographicSymbolSeriesComponent ();
    constructor(private trackingService: TrackingService) {
    }

    ngOnInit() {
   
      this.trackingService.getTrackingData().subscribe((data: any[])=>{
     
        console.log(data)
        if (data['updates_available']){

          this.updatesAvailable = true
          
          this.totalNumberOfAircraft = data['details'].total_number_of_aircrafts
          let minAircraft = data['details'].minimum_target_updates_aircraft
          this.leastTargetUpdatesAircraft = minAircraft[0]['name']
          let maxAircraft =  data['details'].maximum_target_updates_aircraft
          this.mostTargetUpdatesAircraft = maxAircraft[0]['name']
          this.averageTargetUpdatesPerAircraft = data['details'].average_target_updates_per_aircraft
         
          this.addSeriesWith(data['details'].aircraft_details, "rgb(32, 146, 252)", this.symbolSeries);
          this.addSeriesWith(data['details'].minimum_target_updates_aircraft, "red",this.symbolMinSeries);
          this.addSeriesWith(data['details'].maximum_target_updates_aircraft, "green" , this.symbolMaxSeries);
        }
        this.dDay = new Date(data['next_update']);
     
        console.log(this.dDay.toUTCString());


       

      }, error =>{
        this.subscription.unsubscribe();
      } );
      
      
    }

    private getTimeDifference() {
      let currentTime = new Date().getTime()
      this.timeDifference = this.dDay.getTime() - new Date().getTime();
      if(this.timeDifference<0 && !this.sendRequest){
        this.sendRequest = true
        this.trackingService.getTrackingData().subscribe((data: any[])=>{

          this.sendRequest = true
          if (data['updates_available']){
            this.sendRequest = false
            this.updatesAvailable = true
            console.log(data['next_update']);
            console.log(data)
            console.log(data['details'].total_number_of_aircrafts)

            this.totalNumberOfAircraft = data['details'].total_number_of_aircrafts
            let minAircraft = data['details'].minimum_target_updates_aircraft
            this.leastTargetUpdatesAircraft = minAircraft[0]['name']
            let maxAircraft =  data['details'].maximum_target_updates_aircraft
            this.mostTargetUpdatesAircraft = maxAircraft[0]['name']
            this.averageTargetUpdatesPerAircraft = data['details'].average_target_updates_per_aircraft
          
  
            this.addSeriesWith(data['details'].aircraft_details, "rgb(32, 146, 252)", this.symbolSeries);
            this.addSeriesWith(data['details'].minimum_target_updates_aircraft, "red",this.symbolMinSeries);
            this.addSeriesWith(data['details'].maximum_target_updates_aircraft, "green" , this.symbolMaxSeries);

          }
          this.dDay = new Date(data['next_update']);
          console.log("Response : "+this.dDay.toUTCString());
          

         
        },error =>{
          this.subscription.unsubscribe();
        });
        
      }
    }
    public ngAfterViewInit(): void {

      this.subscription = interval(1000)
        .subscribe(x => { 
          this.getTimeDifference();
          
        });
    }

    public addSeriesWith(locations: any[], brush: string , series: IgxGeographicSymbolSeriesComponent) {

        series.dataSource = locations;
        series.markerType = MarkerType.Circle;
        series.latitudeMemberPath = "lat";
        series.longitudeMemberPath = "lon";
        series.markerBrush  = "White";
        series.markerOutline = brush;
        series.tooltipTemplate = this.tooltip;
        this.map.series.add(series);
    }
}
