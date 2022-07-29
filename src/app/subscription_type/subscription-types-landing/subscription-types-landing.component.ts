import { Component, OnInit } from '@angular/core';
import {SubscriptionTypeInputComponent} from "../components/subscription-type-input/subscription-type-input.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-subscription-types-landing',
  templateUrl: './subscription-types-landing.component.html',
  styleUrls: ['./subscription-types-landing.component.css']
})
export class SubscriptionTypesLandingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(SubscriptionTypeInputComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
