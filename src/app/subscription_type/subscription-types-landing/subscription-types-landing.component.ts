import { Component, OnInit } from '@angular/core';
import {SubscriptionTypeInputComponent} from "../components/subscription-type-input/subscription-type-input.component";
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-subscription-types-landing',
  templateUrl: './subscription-types-landing.component.html',
  styleUrls: ['./subscription-types-landing.component.css']
})
export class SubscriptionTypesLandingComponent implements OnInit {

  isUserAdmin: boolean = false;

  constructor(public dialog: MatDialog, private userService: UserService) { }

  ngOnInit(): void {
    this.checkIsUserAdmin();
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(SubscriptionTypeInputComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  checkIsUserAdmin() {
    this.isUserAdmin = this.userService.isRoleAdmin();
  }

}
