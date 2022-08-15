import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {SUBSCRIBER_API_URL, TICKET_API_URL} from "../common/constants";
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

  addTicket(ticket: Ticket): Observable<Ticket>{
    return this.http.post<Ticket>(TICKET_API_URL, ticket, this.httpOptions).pipe(
      tap((ticket) => console.log(`Added new ticket with id ${ticket.id}`)),
      catchError(this.handleError<Ticket>('addTicket'))
    );
  }

  editTicket(ticket: Ticket): Observable<Ticket>{
    return this.http.put<Ticket>(TICKET_API_URL, ticket, this.httpOptions).pipe(
      tap((ticket) => console.log(`Edited ticket with id ${ticket.id}`)),
      catchError(this.handleError<Ticket>('editTicket'))
    );
  }

  resolveTicket(id: number): Observable<Ticket>{
    const url = `${TICKET_API_URL}/${id}/resolve`;

    return this.http.post<Ticket>(url, this.httpOptions).pipe(
      tap(_ => console.log(`Resolved ticket with id ${id}`)),
      catchError(this.handleError<Ticket>('resolveTicket'))
    );
  }

  deleteTicket(id: number): Observable<Ticket>{
    const url = `${TICKET_API_URL}/${id}`;

    return this.http.delete<Ticket>(url, this.httpOptions).pipe(
      tap(_ => console.log(`Deleted ticket with id ${id}`)),
      catchError(this.handleError<Ticket>('deleteTicket'))
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
