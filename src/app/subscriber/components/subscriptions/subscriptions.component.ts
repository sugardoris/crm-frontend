import { Component, OnInit } from '@angular/core';
import {Subscription} from "../../../domain/subscription";

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  tableColumns: string[] = ["publicationName", "dateStarted", "dateEnded", "discount", "price"];
  dataSource = TABLE_DATA;

  constructor() { }

  ngOnInit(): void {
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
