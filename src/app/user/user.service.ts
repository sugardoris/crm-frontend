import {Injectable} from '@angular/core';
import {Role, User} from "../domain/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: User | undefined;

  constructor() { }

  getCurrentUser(): boolean {
    if (this.currentUser === undefined) {
      return false;
    } else {
      return true;
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
