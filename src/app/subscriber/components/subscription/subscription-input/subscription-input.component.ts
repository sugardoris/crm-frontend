import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Subscription} from "../../../../domain/subscription";
import {PublicationPeriod, Publication} from "../../../../domain/publication";
import {SubscriptionPeriod, SubscriptionType} from "../../../../domain/subscriptionType";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import {MY_DATE_FORMAT} from "../../../../domain/date_format";

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
]

const SUBSCRIPTION_TYPES: SubscriptionType[] = [

]
