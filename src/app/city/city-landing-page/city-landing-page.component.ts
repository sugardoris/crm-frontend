import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-city-landing-page',
  templateUrl: './city-landing-page.component.html',
  styleUrls: ['./city-landing-page.component.css']
})
export class CityLandingPageComponent implements OnInit {

  newCity = new FormGroup({
    name: new FormControl(''),
    postNumber: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
