import {Injectable} from '@angular/core';
import {Role, User} from "../domain/user";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {USER_API_URL} from "../common/constants";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: User | undefined;

  constructor(private http: HttpClient) { }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${USER_API_URL}/current-user`);
  }

  isRoleAdmin(): boolean {
    if (this.currentUser) {
      return this.currentUser.role === Role.ADMIN
    } else {
      return false;
    }
  }
}
