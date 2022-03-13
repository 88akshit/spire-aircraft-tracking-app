import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MapTypeScatterSymbolSeriesComponent } from "./maps/geo-map-type-scatter-symbol-series/map-type-scatter-symbol-series.component";
import { IgxGeographicMapModule } from "igniteui-angular-maps";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts";
import { CountDownComponent } from './count-down/count-down.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { TrackingService } from "./tracking-service";
import { HttpClientModule } from '@angular/common/http';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	MapTypeScatterSymbolSeriesComponent,
 CountDownComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxGeographicMapModule,
  IgxDataChartInteractivityModule,
  MatButtonModule,
  MatCardModule,
  MatProgressBarModule,
  HttpClientModule,
  MatDividerModule,
  MatChipsModule
],
  providers: [TrackingService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
