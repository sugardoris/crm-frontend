import { Component, OnInit } from '@angular/core';
import {Payment} from "../../domain/payment";

@Component({
  selector: 'app-subscriber-payments',
  templateUrl: './subscriber-payments.component.html',
  styleUrls: ['./subscriber-payments.component.css']
})
export class SubscriberPaymentsComponent implements OnInit {

  tableColumns: string[] = ["dueDate", "amount", "subscription", "paid"];
  dataSource = TABLE_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

const TABLE_DATA: Payment[] = [
  {dueDate: "dd.MM.YYYY", amount: "35 EUR", subscription: "Subscription name", paid: true},
  {dueDate: "dd.MM.YYYY", amount: "35 EUR", subscription: "Subscription name", paid: false},
  {dueDate: "dd.MM.YYYY", amount: "35 EUR", subscription: "Subscription name", paid: true},
  {dueDate: "dd.MM.YYYY", amount: "35 EUR", subscription: "Subscription name", paid: false},
  {dueDate: "dd.MM.YYYY", amount: "35 EUR", subscription: "Subscription name", paid: true},
  {dueDate: "dd.MM.YYYY", amount: "35 EUR", subscription: "Subscription name", paid: false},
  {dueDate: "dd.MM.YYYY", amount: "35 EUR", subscription: "Subscription name", paid: true},
]
