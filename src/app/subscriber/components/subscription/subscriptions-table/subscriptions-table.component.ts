import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from '../../../../domain/subscription';
import { registerLocaleData } from '@angular/common';
import localeHr from '@angular/common/locales/hr';
registerLocaleData(localeHr, 'hr');

@Component({
  selector: 'app-subscriptions-table',
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
  @Input() dataSource: Subscription[] = [];

  @Output() addEvent = new EventEmitter();
  @Output() editEvent = new EventEmitter();
  @Output() deactivateEvent = new EventEmitter();
  @Output() detailsEvent = new EventEmitter();

  constructor(
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
  }

  openAddDialog() {
    this.addEvent.emit();
  }

  openEditDialog(subscription: Subscription) {
    this.editEvent.emit(subscription);
  }

  openDeactivateDialog(subscription: Subscription) {
    this.deactivateEvent.emit(subscription)
  }

  openDetailsDialog(subscription: Subscription) {
    this.detailsEvent.emit(subscription);
  }
}
