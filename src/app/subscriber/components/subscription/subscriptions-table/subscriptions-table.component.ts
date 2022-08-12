import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Subscription} from "../../../../domain/subscription";
import {SubscriptionDetailsComponent} from "../subscription-details/subscription-details.component";
import {SubscriptionInputComponent} from "../subscription-input/subscription-input.component";
import {SubscriptionService} from "../../../../service/subscription.service";
import {ActivatedRoute} from "@angular/router";

import { registerLocaleData } from '@angular/common';
import localeHr from '@angular/common/locales/hr';
registerLocaleData(localeHr, 'hr');

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions-table.component.html',
  styleUrls: ['./subscriptions-table.component.css']
})
export class SubscriptionsTableComponent implements OnInit {

  tableColumns: string[] = ["publicationName", "subscriptionType", "dateStarted", "dateEnded", "price", "discount"];
  subscriptions: Subscription[] = [];
  dataSource: Subscription[] = [];
  loading: boolean = false;

  constructor(
    public dialog: MatDialog,
    private subscriptionService: SubscriptionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getSubscriptions();
  }

  getSubscriptions() {
    const subscriberId = this.route.snapshot.paramMap.get('id');

    if (subscriberId !== null) {
      this.subscriptionService.getSubscriptions(subscriberId).subscribe(
        (data) => {
          this.subscriptions = data;
          this.dataSource = this.subscriptions;
        }
      ).add(() => this.loading = false)
    } else {
      console.error('Subscriber id cannot be null.')
    }
  }

  openDetailsDialog(subscription: Subscription) {
    const dialogRef = this.dialog.open(
      SubscriptionDetailsComponent,
      {data: subscription});

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
