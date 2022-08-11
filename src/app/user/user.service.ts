import {Injectable} from '@angular/core';
import {Role, User} from "../domain/user";
import {catchError, Observable, of, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {USER_API_URL} from "../common/constants";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: User | undefined;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) { }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${USER_API_URL}/current-user`);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(USER_API_URL).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    }
  }

  isRoleAdmin(): boolean {
    if (this.currentUser) {
      return this.currentUser.role === Role.ADMIN
    } else {
      return false;
    }
  }


}
