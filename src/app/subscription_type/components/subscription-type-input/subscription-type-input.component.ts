import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SubscriptionType, SubscriptionPeriod} from "../../../domain/subscriptionType";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import {MY_DATE_FORMAT} from "../../../domain/date_format";

@Component({
  selector: 'app-subscription-type-input',
  templateUrl: './subscription-type-input.component.html',
  styleUrls: ['./subscription-type-input.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT }
  ]
})
export class SubscriptionTypeInputComponent implements OnInit {

  editMode: boolean = false;
  subscriptionType?: SubscriptionType;
  periodOptions = Object.values(SubscriptionPeriod);

  subscriptionTypeForm = new FormGroup({
    name: new FormControl(''),
    discount: new FormControl(''),
    period: new FormControl(''),
    expirationDate: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }

}
