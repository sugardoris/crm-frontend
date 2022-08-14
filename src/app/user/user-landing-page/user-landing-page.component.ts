import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UserInputDialogComponent} from "../components/user-input-dialog/user-input-dialog.component";
import {UserService} from "../../service/user.service";
import {User} from "../../domain/user";

@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.css']
})
export class UserLandingPageComponent implements OnInit {

  users: User[] = [];
  isUserAdmin: boolean = false;
  loading: boolean = false;

  constructor(
    public dialog: MatDialog,
    public userService: UserService
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
      }).add(() => this.loading = false)
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(
      UserInputDialogComponent,
      {data: {mode: "Add"}});

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === "Submit") {
        this.getUsers();
      }
    });
  }

  checkIsUserAdmin() {
    this.isUserAdmin = this.userService.isRoleAdmin();
  }

}
