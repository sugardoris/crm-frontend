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
  {publicationName: "Publication Name", dateStarted: "dd.MM.YYYY", dateEnded: "dd.MM.YYYY",
    subscriptionType: {name: "New subcribers offer - MONTHLY", subscriptionPeriod: SubscriptionPeriod.MONTHLY, discount: "10%", active: true}},
  {publicationName: "Publication Name", dateStarted: "dd.MM.YYYY", dateEnded: "dd.MM.YYYY",
    subscriptionType: {name: "New subcribers offer - MONTHLY", subscriptionPeriod: SubscriptionPeriod.MONTHLY, discount: "10%", active: true}},
  {publicationName: "Publication Name", dateStarted: "dd.MM.YYYY", dateEnded: "dd.MM.YYYY",
    subscriptionType: {name: "Summer sports offer - TRIMONTHLY", subscriptionPeriod: SubscriptionPeriod.TRIMONTHLY, discount: "15%", active: true}},
  {publicationName: "Publication Name", dateStarted: "dd.MM.YYYY", dateEnded: "dd.MM.YYYY",
    subscriptionType: {name: "Summer sports offer - TRIMONTHLY", subscriptionPeriod: SubscriptionPeriod.TRIMONTHLY, discount: "15%", active: true}},
  {publicationName: "Publication Name", dateStarted: "dd.MM.YYYY", dateEnded: "dd.MM.YYYY",
    subscriptionType: {name: "Daily news offer - ANNUALLY", subscriptionPeriod: SubscriptionPeriod.ANNUALLY, discount: "25%", active: true}},
  {publicationName: "Publication Name", dateStarted: "dd.MM.YYYY", dateEnded: "dd.MM.YYYY",
    subscriptionType: {name: "Daily news offer - ANNUALLY", subscriptionPeriod: SubscriptionPeriod.ANNUALLY, discount: "25%", active: true}}
]
