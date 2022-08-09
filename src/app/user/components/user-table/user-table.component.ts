import { Component, OnInit } from '@angular/core';
import {User, Role} from "../../../domain/user";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  tableColumns: string[] = ["username", "fullName", "role", "status"];
  dataSource = TABLE_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

const TABLE_DATA: User[] = [
  {username: "Username", name: "Full Name", role: Role.EMPLOYEE, active: true},
  {username: "Username", name: "Full Name", role: Role.ADMIN, active: true},
  {username: "Username", name: "Full Name", role: Role.EMPLOYEE, active: false},
  {username: "Username", name: "Full Name", role: Role.ADMIN, active: true},
  {username: "Username", name: "Full Name", role: Role.EMPLOYEE, active: false},
  {username: "Username", name: "Full Name", role: Role.ADMIN, active: false},
  {username: "Username", name: "Full Name", role: Role.EMPLOYEE, active: true},
  {username: "Username", name: "Full Name", role: Role.ADMIN, active: true}
]
