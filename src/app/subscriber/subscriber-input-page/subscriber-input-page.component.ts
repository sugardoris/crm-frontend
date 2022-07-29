import { Component, OnInit } from '@angular/core';
import {Subscriber} from "../../domain/subscriber";
import {FormControl, FormGroup} from "@angular/forms";
import {City} from "../../domain/city";
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-subscriber-input-page',
  templateUrl: './subscriber-input-page.component.html',
  styleUrls: ['./subscriber-input-page.component.css']
})
export class SubscriberInputPageComponent implements OnInit {

  editMode: boolean = false;
  subscriber?: Subscriber;
  cities: City[] = [
    {name: "Zagreb", postNumber: 10000},
    {name: "Split", postNumber: 21000},
    {name: "Rijeka", postNumber: 51000},
    {name: "Zadar", postNumber: 23000},
    {name: "Osijek", postNumber: 31000}
  ];
  checkboxColor: ThemePalette = 'primary';

  subscriberForm = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    companyName: new FormControl(''),
    oib: new FormControl(''),
    email: new FormControl(''),
    phone1: new FormControl(''),
    phone2: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    legalEntity: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }

}
