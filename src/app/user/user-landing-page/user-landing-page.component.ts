import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UserInputDialogComponent} from "../components/user-input-dialog/user-input-dialog.component";
import {UserService} from "../../service/user.service";
import {Role, User} from "../../domain/user";

@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.css']
})
export class UserLandingPageComponent implements OnInit {

  isUserAdmin: boolean = false;

  constructor(
    public dialog: MatDialog,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.checkIsUserAdmin();
  }

  openDialog() {
    const dialogRef = this.dialog.open(UserInputDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  checkIsUserAdmin() {
    this.isUserAdmin = this.userService.isRoleAdmin();
  }

}
