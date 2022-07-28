import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Subscription} from "../../../domain/subscription";
import {PublicationPeriod, Publication} from "../../../domain/publication";
import {SubscriptionPeriod, SubscriptionType} from "../../../domain/subscriptionType";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import {MY_DATE_FORMAT} from "../../../domain/date_format";

@Component({
  selector: 'app-subscription-input',
  templateUrl: './subscription-input.component.html',
  styleUrls: ['./subscription-input.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT }
  ]
})
export class SubscriptionInputComponent implements OnInit {

  editMode: boolean = false;
  subscription?: Subscription;
  publicationOptions: string[] = PUBLICATIONS.map(value => value.name);
  typeOptions: string[] = SUBSCRIPTION_TYPES.map(value => value.name);


  subscriptionForm = new FormGroup({
    publication: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    subscriptionType: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }

}

const PUBLICATIONS: Publication[] = [
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: PublicationPeriod.DAILY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: true, price: "15.00 EUR"},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: PublicationPeriod.WEEKLY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: true, price: "15.00 EUR"},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: PublicationPeriod.BIWEEKLY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: true, price: "15.00 EUR"},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: PublicationPeriod.MONTHLY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: true, price: "15.00 EUR"},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: PublicationPeriod.BIANNUALLY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: true, price: "15.00 EUR"},
  {name: "Publication Name", firstIssue: "dd.MM.YYYY", issuePeriod: PublicationPeriod.ANNUALLY, comesOut: "Every day", nextIssue: "dd.MM.YYYY", active: true, price: "15.00 EUR"},
]

const SUBSCRIPTION_TYPES: SubscriptionType[] = [
  {name: "New subcribers offer - MONTHLY", subscriptionPeriod: SubscriptionPeriod.MONTHLY, discount: "10%", active: true},
  {name: "Summer sports offer - TRIMONTHLY", subscriptionPeriod: SubscriptionPeriod.TRIMONTHLY, discount: "15%", active: true},
  {name: "Daily news offer - ANNUALLY", subscriptionPeriod: SubscriptionPeriod.ANNUALLY, discount: "25%", active: true}
]
