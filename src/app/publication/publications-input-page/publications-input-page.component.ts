import { Component, OnInit } from '@angular/core';
import {Period, Publication} from "../../domain/publication";
import {FormControl, FormGroup} from "@angular/forms";
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import {MY_DATE_FORMAT} from "../../domain/date_format";

@Component({
  selector: 'app-publications-input-page',
  templateUrl: './publications-input-page.component.html',
  styleUrls: ['./publications-input-page.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT }
  ]
})
export class PublicationsInputPageComponent implements OnInit {

  editMode: boolean = false;
  publication?: Publication;
  periodOptions = Object.values(Period);

  publicationForm = new FormGroup({
    name: new FormControl(('')),
    firstIssue: new FormControl(('')),
    issuePeriod: new FormControl(('')),
    comesOut: new FormControl((''))
  })

  constructor() { }

  ngOnInit(): void {
  }

}
