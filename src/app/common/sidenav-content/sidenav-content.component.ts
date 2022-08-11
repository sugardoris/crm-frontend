import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../auth/login/login.service";
import {Router} from "@angular/router";
import {UserService} from "../../user/user.service";

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.css']
})
export class SidenavContentComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.loginService.logout();
    this.userService.currentUser = undefined;
    this.router.navigate(['/login']);
  }

}
