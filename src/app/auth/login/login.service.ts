import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserCredentials} from "../../domain/user-credentials";
import {Observable} from "rxjs";
import {JwtToken} from "../../domain/jwt-token";
import {AUTHENTICATE_URL} from "../../common/constants";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  authenticate(userCredentials: UserCredentials): Observable<JwtToken> {
    return this.http.post<JwtToken>(AUTHENTICATE_URL, userCredentials);
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
