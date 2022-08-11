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
      tap(data => console.log(data)),
      catchError(this.handleError<Publication[]>('getPublications', []))
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
