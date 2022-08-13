import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {CITY_API_URL} from "../common/constants";
import {City} from "../domain/city";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) { }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(CITY_API_URL).pipe(
      tap(_ => console.log('Fetchet cities')),
      catchError(this.handleError<City[]>('getCities', []))
    );
  }

  addCity(city: City): Observable<City> {
    return this.http.post<City>(CITY_API_URL, city, this.httpOptions).pipe(
      tap((newCity) => console.log(newCity)),
      catchError(this.handleError<City>('addCity'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    }
  }
}
