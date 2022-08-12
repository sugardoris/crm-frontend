import { Component, OnInit } from '@angular/core';
import {User} from "../../../domain/user";
import {UserService} from "../../user.service";

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

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
        this.dataSource = this.users;
      }).add(() => this.loading = false)
  }
}
