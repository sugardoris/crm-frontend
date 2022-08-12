import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PublicationInputComponent} from "../components/publication-input/publication-input.component";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-publications-landing-page',
  templateUrl: './publications-landing-page.component.html',
  styleUrls: ['./publications-landing-page.component.css']
})
export class PublicationsLandingPageComponent implements OnInit {

  isUserAdmin: boolean = false;

  constructor(public dialog: MatDialog, private userService: UserService) { }

  ngOnInit(): void {
    this.checkIsUserAdmin();
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(PublicationInputComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  checkIsUserAdmin() {
    this.isUserAdmin = this.userService.isRoleAdmin();
  }
}
