import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {PUBLICATION_API_URL} from "../common/constants";
import {Publication} from "../domain/publication";

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) { }

  getPublications(): Observable<Publication[]> {
    return this.http.get<Publication[]>(PUBLICATION_API_URL).pipe(
      tap(_ => console.log('Fetched publications')),
      catchError(this.handleError<Publication[]>('getPublications', []))
    );
  }

  getPublication(id: string): Observable<Publication> {
    const url = `${PUBLICATION_API_URL}/${id}`;
    return this.http.get<Publication>(url).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError<Publication>(`getPublication with id=${id}`))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    }
  }
}
