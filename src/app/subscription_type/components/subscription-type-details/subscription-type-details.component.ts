import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubscriptionType } from '../../../domain/subscriptionType';

@Component({
  selector: 'app-subscription-type-details',
  templateUrl: './subscription-type-details.component.html',
  styleUrls: ['./subscription-type-details.component.css'],
})
export class SubscriptionTypeDetailsComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public subscriptionType: SubscriptionType
  ) {}

  ngOnInit(): void {}
}
