import { Component, OnInit } from '@angular/core';
import {SubscriptionPeriod, SubscriptionType} from "../../../domain/subscriptionType";
import {SubscriptionTypeInputComponent} from "../subscription-type-input/subscription-type-input.component";

@Component({
  selector: 'app-subscription-type-table',
  templateUrl: './subscription-type-table.component.html',
  styleUrls: ['./subscription-type-table.component.css']
})
export class SubscriptionTypeTableComponent implements OnInit {

  tableColumns: string[] = ["name", "period", "discount", "expirationDate", "active"];
  dataSource = TABLE_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

const TABLE_DATA: SubscriptionType[] = [
  {name: "New subcribers offer - MONTHLY", subscriptionPeriod: SubscriptionPeriod.MONTHLY, discount: "10%", expirationDate: "MM/DD/YYYY", active: true},
  {name: "Summer sports offer - TRIMONTHLY", subscriptionPeriod: SubscriptionPeriod.TRIMONTHLY, discount: "15%", expirationDate: "MM/DD/YYYY", active: true},
  {name: "Daily news offer - ANNUALLY", subscriptionPeriod: SubscriptionPeriod.ANNUALLY, discount: "25%", expirationDate: "MM/DD/YYYY", active: true}
]
