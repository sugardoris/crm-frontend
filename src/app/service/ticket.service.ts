import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {SUBSCRIBER_API_URL} from "../common/constants";
import {Ticket} from "../domain/ticket";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) { }

  getTickets(subscriberId: string): Observable<Ticket[]> {
    const url = `${SUBSCRIBER_API_URL}/${subscriberId}/tickets`;
    return this.http.get<Ticket[]>(url).pipe(
      tap(_ => console.log('Fetched tickets')),
      catchError(this.handleError<Ticket[]>(`getTickets for subscriber with id=${subscriberId}`))
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
