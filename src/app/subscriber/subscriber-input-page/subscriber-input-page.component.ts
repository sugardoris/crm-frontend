import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ContactInfo, Subscriber} from "../../domain/subscriber";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {City} from "../../domain/city";
import {ThemePalette} from "@angular/material/core";
import {CityService} from "../../service/city.service";
import {SubscriberService} from "../../service/subscriber.service";

@Component({
  selector: 'app-subscriber-input-page',
  templateUrl: './subscriber-input-page.component.html',
  styleUrls: ['./subscriber-input-page.component.css']
})
export class SubscriberInputPageComponent implements OnInit {

  editMode: boolean = false;
  subscriber?: Subscriber;
  cities: City[] = [];
  checkboxColor: ThemePalette = 'primary';

  subscriberForm = new FormGroup({
    firstName: new FormControl('', Validators.maxLength(50)),
    lastName: new FormControl('', Validators.maxLength(50)),
    companyName: new FormControl('', Validators.maxLength(70)),
    oib: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone1: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    phone2: new FormControl('', Validators.maxLength(50)),
    billingAddress: new FormControl('',[Validators.required, Validators.maxLength(100)]),
    city: new FormControl('', Validators.required),
    legalEntity: new FormControl(false),
  })

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cityService: CityService,
    private subscriberService: SubscriberService
  ) { }

  ngOnInit(): void {
    this.checkMode();
    this.getCities();
  }

  checkMode() {
    const mode = this.route.snapshot.params['mode'];
    if (mode === 'edit') {
      this.editMode = true;
      this.getUserForEdit();
    }
  }

  getCities() {
    this.cityService.getCities().subscribe(
      (data) => {
        this.cities = data;
      });
  }

  getUserForEdit() {
    this.subscriberService.getSubscriber(this.route.snapshot.params['id']).subscribe(
      (data) => {
        this.subscriber = data;
        this.setFormForEdit();
      }
    )
  }

  setFormForEdit() {
    console.log(this.subscriber);
    this.subscriberForm.patchValue({
      firstName: this.subscriber?.contactInfo.firstName,
      lastName: this.subscriber?.contactInfo.lastName,
      companyName: this.subscriber?.contactInfo.companyName,
      oib: this.subscriber?.contactInfo.oib,
      email: this.subscriber?.contactInfo.email,
      phone1: this.subscriber?.contactInfo.phone1,
      phone2: this.subscriber?.contactInfo.phone2,
      billingAddress: this.subscriber?.contactInfo.billingAddress,
      legalEntity: this.subscriber?.contactInfo.legalEntity,
      city: this.subscriber?.contactInfo.city
    })
  }

  onSubmit() {
    let contactInfo: ContactInfo = {
      firstName: this.subscriberForm.value.firstName,
      lastName: this.subscriberForm.value.lastName,
      companyName: this.subscriberForm.value.companyName,
      oib: this.subscriberForm.value.oib,
      email: this.subscriberForm.value.email,
      phone1: this.subscriberForm.value.phone1,
      phone2: this.subscriberForm.value.phone2,
      billingAddress: this.subscriberForm.value.billingAddress,
      legalEntity: this.subscriberForm.value.legalEntity,
      city: this.subscriberForm.value.city
    }

    let subscriber: Subscriber = {
      contactInfo: contactInfo
    }

    if (this.editMode) {
      subscriber.id = this.route.snapshot.params['id'];
      this.subscriberService.editSubscriber(subscriber).subscribe(
        (subscriber) => {
          this.router.navigate([`/subscribers/${subscriber.id}`]);
        }
      );
    } else {
      this.subscriberService.addSubscriber(subscriber).subscribe(
        (data) => {
          this.router.navigate([`/subscribers`]);
        }
      )
    }
  }

  compareCities(city1: City, city2: City) {
    return city1 && city2 && city1.postcode == city2.postcode;
  }

}
