import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {SUBSCRIPTION_TYPE_API_URL} from "../common/constants";
import {SubscriptionType} from "../domain/subscriptionType";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionTypeService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) { }

  getSubscriptionTypes(): Observable<SubscriptionType[]> {
    return this.http.get<SubscriptionType[]>(SUBSCRIPTION_TYPE_API_URL).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError<SubscriptionType[]>('getSubscriptionTypes', []))
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
