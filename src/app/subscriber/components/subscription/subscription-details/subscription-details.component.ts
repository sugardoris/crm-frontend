import {Component, Inject, OnInit} from '@angular/core';
import {Subscription} from "../../../../domain/subscription";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

import { registerLocaleData } from '@angular/common';
import localeHr from '@angular/common/locales/hr';
registerLocaleData(localeHr, 'hr');

@Component({
  selector: 'app-subscription-details',
  templateUrl: './subscription-details.component.html',
  styleUrls: ['./subscription-details.component.css']
})
export class SubscriptionDetailsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public subscription: Subscription
  ) { }

  ngOnInit(): void {
  }

}
