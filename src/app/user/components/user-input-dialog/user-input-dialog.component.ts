import { Component, OnInit } from '@angular/core';
import {Role, User} from "../../../domain/user";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-input-dialog',
  templateUrl: './user-input-dialog.component.html',
  styleUrls: ['./user-input-dialog.component.css']
})
export class UserInputDialogComponent implements OnInit {

  editMode: boolean = false;
  user?: User;
  roleOptions = Object.values(Role);

  userForm = new FormGroup({
    username: new FormControl(''),
    fullName: new FormControl(''),
    role: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }

}
