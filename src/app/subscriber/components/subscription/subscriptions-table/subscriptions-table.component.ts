import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Subscription} from "../../../../domain/subscription";
import {SubscriptionDetailsComponent} from "../subscription-details/subscription-details.component";
import {SubscriptionPeriod, SubscriptionType} from "../../../../domain/subscriptionType";
import {SubscriptionInputComponent} from "../subscription-input/subscription-input.component";

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions-table.component.html',
  styleUrls: ['./subscriptions-table.component.css']
})
export class SubscriptionsTableComponent implements OnInit {

  tableColumns: string[] = ["publicationName", "dateStarted", "dateEnded", "discount", "subscriptionType"];
  dataSource = TABLE_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDetailsDialog() {
    const dialogRef = this.dialog.open(SubscriptionDetailsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(SubscriptionInputComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

const TABLE_DATA: Subscription[] = [
]
