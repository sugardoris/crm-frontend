import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { SUBSCRIPTION_TYPE_API_URL } from '../common/constants';
import { SubscriptionType } from '../domain/subscriptionType';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionTypeService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getSubscriptionTypes(): Observable<SubscriptionType[]> {
    return this.http.get<SubscriptionType[]>(SUBSCRIPTION_TYPE_API_URL).pipe(
      tap((_) => console.log('Fetched subscription types')),
      catchError(
        this.handleError<SubscriptionType[]>('getSubscriptionTypes', [])
      )
    );
  }

  getSubscriptionType(id: string): Observable<SubscriptionType> {
    const url = `${SUBSCRIPTION_TYPE_API_URL}/${id}`;
    return this.http.get<SubscriptionType>(url).pipe(
      tap((subscriptionType) =>
        console.log(
          `Fetched subscription type with name ${subscriptionType.name}`
        )
      ),
      catchError(
        this.handleError<SubscriptionType>(`getSubscriptionType with id=${id}`)
      )
    );
  }

  addSubscriptionType(
    subscriptionType: SubscriptionType
  ): Observable<SubscriptionType> {
    return this.http
      .post<SubscriptionType>(
        SUBSCRIPTION_TYPE_API_URL,
        subscriptionType,
        this.httpOptions
      )
      .pipe(
        tap((subscriptionType) =>
          console.log(
            `Added new subscription type with name ${subscriptionType.name}`
          )
        ),
        catchError(this.handleError<SubscriptionType>('addSubscriptionType'))
      );
  }

  editSubscriptionType(
    subscriptionType: SubscriptionType
  ): Observable<SubscriptionType> {
    return this.http
      .put<SubscriptionType>(
        SUBSCRIPTION_TYPE_API_URL,
        subscriptionType,
        this.httpOptions
      )
      .pipe(
        tap((subscriptionType) =>
          console.log(
            `Edited subscription type with name ${subscriptionType.name}`
          )
        ),
        catchError(this.handleError<SubscriptionType>('editSubscriptionType'))
      );
  }

  deactivateSubscriptionType(id: number): Observable<SubscriptionType> {
    const url = `${SUBSCRIPTION_TYPE_API_URL}/${id}/deactivate`;

    return this.http.post<SubscriptionType>(url, this.httpOptions).pipe(
      tap((_) => console.log(`Deactivated subscription type with id ${id}`)),
      catchError(
        this.handleError<SubscriptionType>('deactivateSubscriptionType')
      )
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }
}
