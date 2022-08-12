import {Component, OnInit, ViewChild} from '@angular/core';
import {Role, User} from "../../../domain/user";
import {UserService} from "../../../service/user.service";
import {MatMenuTrigger} from "@angular/material/menu";
import {trigger} from "@angular/animations";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  tableColumns: string[] = ["username", "fullName", "role", "status"];
  users: User[] = [];
  dataSource: User[] = [];
  loading: boolean = false;
  isUserAdmin: boolean = false;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getUsers();
    this.checkIsUserAdmin();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
        this.dataSource = this.users;
      }).add(() => this.loading = false)
  }

  checkIsUserAdmin() {
    this.isUserAdmin = this.userService.isRoleAdmin();
  }
}
