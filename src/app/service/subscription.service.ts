import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { SUBSCRIBER_API_URL } from '../common/constants';
import { SUBSCRIPTION_API_URL } from '../common/constants';
import { Subscription } from '../domain/subscription';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getSubscriptions(subscriberId: string): Observable<Subscription[]> {
    const url = `${SUBSCRIBER_API_URL}/${subscriberId}/subscriptions`;
    return this.http.get<Subscription[]>(url).pipe(
      tap((_) => console.log('Fetched subscriptions')),
      catchError(
        this.handleError<Subscription[]>(
          `getSubscriptions for subscriber with id=${subscriberId}`
        )
      )
    );
  }

  getSubscription(id: string): Observable<Subscription> {
    const url = `${SUBSCRIPTION_API_URL}/${id}`;
    return this.http.get<Subscription>(url).pipe(
      tap((_) => console.log(`Fetched subscription with id=${id}`)),
      catchError(
        this.handleError<Subscription>(`getSubscription with id=${id}`)
      )
    );
  }

  addSubscription(subscription: Subscription): Observable<Subscription> {
    return this.http
      .post<Subscription>(SUBSCRIPTION_API_URL, subscription, this.httpOptions)
      .pipe(
        tap((subscription) =>
          console.log(`Added new subscription with id ${subscription.id}`)
        ),
        catchError(this.handleError<Subscription>('addSubscription'))
      );
  }

  editSubscription(subscription: Subscription): Observable<Subscription> {
    return this.http
      .put<Subscription>(SUBSCRIPTION_API_URL, subscription, this.httpOptions)
      .pipe(
        tap((subscription) =>
          console.log(`Edited subscription with id ${subscription.id}`)
        ),
        catchError(this.handleError<Subscription>('addSubscription'))
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
