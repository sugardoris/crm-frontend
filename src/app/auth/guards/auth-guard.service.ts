import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {map, Observable} from "rxjs";
import {UserService} from "../../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService{

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  canActivate(): boolean {
    return this.checkLogin();
  }

  checkLogin(): boolean {
    return this.userService.getCurrentUser();
  }
}
