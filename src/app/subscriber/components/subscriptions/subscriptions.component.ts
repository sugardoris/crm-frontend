import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Subscription} from "../../../domain/subscription";
import {SubscriptionDetailsComponent} from "../subscription-details/subscription-details.component";

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  tableColumns: string[] = ["publicationName", "dateStarted", "dateEnded", "discount", "price"];
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

}

const TABLE_DATA: Subscription[] = [
  {publicationName: "Publication Name", dateStarted: "dd.MM.YYYY", dateEnded: "dd.MM.YYYY", discount: "10%", price: "15.00 EUR"},
  {publicationName: "Publication Name", dateStarted: "dd.MM.YYYY", dateEnded: "dd.MM.YYYY", discount: "10%", price: "15.00 EUR"},
  {publicationName: "Publication Name", dateStarted: "dd.MM.YYYY", dateEnded: "dd.MM.YYYY", discount: "10%", price: "15.00 EUR"},
  {publicationName: "Publication Name", dateStarted: "dd.MM.YYYY", dateEnded: "dd.MM.YYYY", discount: "10%", price: "15.00 EUR"},
  {publicationName: "Publication Name", dateStarted: "dd.MM.YYYY", dateEnded: "dd.MM.YYYY", discount: "10%", price: "15.00 EUR"},
  {publicationName: "Publication Name", dateStarted: "dd.MM.YYYY", dateEnded: "dd.MM.YYYY", discount: "10%", price: "15.00 EUR"}
]
