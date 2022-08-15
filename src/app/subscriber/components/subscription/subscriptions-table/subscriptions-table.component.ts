import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from '../../../../domain/subscription';
import { SubscriptionDetailsComponent } from '../subscription-details/subscription-details.component';
import { SubscriptionInputComponent } from '../subscription-input/subscription-input.component';
import { SubscriptionService } from '../../../../service/subscription.service';
import { ActivatedRoute } from '@angular/router';

import { registerLocaleData } from '@angular/common';
import localeHr from '@angular/common/locales/hr';
import {DeactivateModalComponent} from "../../../../common/deactivate-modal/deactivate-modal.component";

registerLocaleData(localeHr, 'hr');

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions-table.component.html',
  styleUrls: ['./subscriptions-table.component.css'],
})
export class SubscriptionsTableComponent implements OnInit {
  tableColumns: string[] = [
    'publicationName',
    'subscriptionType',
    'dateStarted',
    'dateEnded',
    'price',
    'discount',
  ];
  dataSource: Subscription[] = [];
  loading: boolean = false;

  constructor(
    public dialog: MatDialog,
    private subscriptionService: SubscriptionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.getSubscriptions();
  }

  getSubscriptions() {
    const subscriberId = this.route.snapshot.paramMap.get('id');

    if (subscriberId !== null) {
      this.subscriptionService
        .getSubscriptions(subscriberId)
        .subscribe((data) => {
          this.dataSource = data;
        })
        .add(() => (this.loading = false));
    } else {
      console.error('Subscriber id cannot be null.');
    }
  }

  openDetailsDialog(subscription: Subscription) {
    const dialogRef = this.dialog.open(SubscriptionDetailsComponent, {
      data: subscription,
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(SubscriptionInputComponent, {
      data: {mode: 'Add', subscriberId: this.route.snapshot.paramMap.get('id')},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Submit') {
        this.getSubscriptions();
      }
    });
  }

  openEditDialog(subscription: Subscription) {
    const dialogRef = this.dialog.open(SubscriptionInputComponent, {
      data: { subscription: subscription, mode: 'Edit', subscriberId: this.route.snapshot.paramMap.get('id') },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Edit') {
        this.getSubscriptions();
      }
    });
  }

  openDeactivateDialog(subscription: Subscription, entity = 'subscription') {
    const dialogRef = this.dialog.open(DeactivateModalComponent, {
      data: entity,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Deactivate') {
        this.deactivateSubscription(subscription);
      }
    });
  }

  deactivateSubscription(subscription: Subscription) {
    subscription.dateEnded = new Date().toISOString();
    this.subscriptionService.editSubscription(subscription).subscribe((result) => {
      this.getSubscriptions();
    })
  }
}
