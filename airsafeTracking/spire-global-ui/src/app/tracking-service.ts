import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor(private http: HttpClient) { }
  
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  getTrackingData(): Observable<any> {

    let endpoint = "http://127.0.0.1:8000/v1/targets/aircrafts"
    return this.http.get(endpoint).pipe(catchError(this.handleError));
  }

}
