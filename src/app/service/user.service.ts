import { Injectable } from '@angular/core';
import { Role, User } from '../domain/user';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { USER_API_URL } from '../common/constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser?: User;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${USER_API_URL}/current-user`);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(USER_API_URL).pipe(
      tap((_) => console.log('Fetched users')),
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(USER_API_URL, user, this.httpOptions).pipe(
      tap((newUser) =>
        console.log(`Added new user with username ${newUser.username}`)
      ),
      catchError(this.handleError<User>('addUser'))
    );
  }

  editUser(user: User): Observable<User> {
    return this.http.put<User>(USER_API_URL, user, this.httpOptions).pipe(
      tap((data) => console.log(`Edited user with username ${data.username}`)),
      catchError(this.handleError<User>('editUser'))
    );
  }

  deactivateUser(id: number): Observable<User> {
    const url = `${USER_API_URL}/${id}/deactivate`;

    return this.http.post<User>(url, this.httpOptions).pipe(
      tap((_) => console.log(`Deactivated user with id ${id}`)),
      catchError(this.handleError<User>('deactivateUser'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }

  setCurrentUser() {
    this.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
      localStorage.setItem('username', user.username);
      localStorage.setItem('role', user.role);
    });
  }

  isRoleAdmin(): boolean {
    let role = localStorage.getItem('role');
    return role === 'ADMIN';
  }
}
