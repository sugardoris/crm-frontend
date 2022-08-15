import { Injectable } from '@angular/core';
import { SUBSCRIBER_API_URL } from '../common/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { Subscriber } from '../domain/subscriber';

@Injectable({
  providedIn: 'root',
})
export class SubscriberService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getSubscribers(): Observable<Subscriber[]> {
    return this.http.get<Subscriber[]>(SUBSCRIBER_API_URL).pipe(
      tap((_) => console.log('Fetched subscribers')),
      catchError(this.handleError<Subscriber[]>('getSubscribers', []))
    );
  }

  getSubscriber(id: string): Observable<Subscriber> {
    const url = `${SUBSCRIBER_API_URL}/${id}`;
    return this.http.get<Subscriber>(url).pipe(
      tap((_) => console.log(`Fetched subscriber with id=${id}`)),
      catchError(this.handleError<Subscriber>(`getSubscriber with id=${id}`))
    );
  }

  addSubscriber(subscriber: Subscriber): Observable<Subscriber> {
    return this.http
      .post<Subscriber>(SUBSCRIBER_API_URL, subscriber, this.httpOptions)
      .pipe(
        tap((subscriber) =>
          console.log(`Added new subscriber with id ${subscriber.id}`)
        ),
        catchError(this.handleError<Subscriber>('addSubscriber'))
      );
  }

  editSubscriber(subscriber: Subscriber): Observable<Subscriber> {
    return this.http
      .put<Subscriber>(SUBSCRIBER_API_URL, subscriber, this.httpOptions)
      .pipe(
        tap((subscriber) =>
          console.log(`Edited subscriber with id ${subscriber.id}`)
        ),
        catchError(this.handleError<Subscriber>('editSubscriber'))
      );
  }

  deactivateSubscriber(id: number): Observable<Subscriber> {
    const url = `${SUBSCRIBER_API_URL}/${id}/deactivate`;

    return this.http.post<Subscriber>(url, this.httpOptions).pipe(
      tap((_) => console.log(`Deactivated subscriber with id ${id}`)),
      catchError(this.handleError<Subscriber>('deactivateSubscriber'))
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
