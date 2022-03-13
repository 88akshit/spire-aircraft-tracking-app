import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { TrackingService } from '../tracking-service';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit, OnDestroy, OnChanges {

  private subscription: Subscription;

  public dateNow = new Date();
  public dDay = new Date('Feb 26 2022 13:00:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;

  //public timeDifference;
  public secondsToDday;
  public minutesToDday;
  public hoursToDday;
  public daysToDday;

  @Input() timeDifference: number;


  constructor(private trackingService: TrackingService) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.allocateTimeUnits(changes['timeDifference'].currentValue)
  }


  ngOnInit() {

  }

  private allocateTimeUnits(timeDifference) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}