import {Component, Inject, OnInit} from '@angular/core';
import {Subscriber} from "../../../../domain/subscriber";
import {City} from "../../../../domain/city";
import {ThemePalette} from "@angular/material/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CityService} from "../../../../service/city.service";
import {SubscriberService} from "../../../../service/subscriber.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-subscriber-input',
  templateUrl: './subscriber-input.component.html',
  styleUrls: ['./subscriber-input.component.css']
})
export class SubscriberInputComponent implements OnInit {

  editMode: boolean = false;
  subscriber?: Subscriber;
  cities: City[] = [];
  checkboxColor: ThemePalette = 'accent';
  formError: boolean = false;

  subscriberForm = new FormGroup({
    firstName: new FormControl('', Validators.maxLength(50)),
    lastName: new FormControl('', Validators.maxLength(50)),
    companyName: new FormControl('', Validators.maxLength(70)),
    oib: new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    billingAddress: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
    city: new FormControl('', Validators.required),
    legalEntity: new FormControl(false),
  });

  constructor(
    private cityService: CityService,
    private subscriberService: SubscriberService,
    public dialogRef: MatDialogRef<SubscriberInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { subscriber: Subscriber; mode: string}
  ) { }

  ngOnInit(): void {
    this.checkMode();
    this.getCities();
  }

  checkMode() {
    if (this.data.mode === 'Edit') {
      this.editMode = true;
      this.getSubscriberData(this.data.subscriber);
    }
  }

  getCities() {
    this.cityService.getCities().subscribe((data) => {
      this.cities = data;
    });
  }

  getSubscriberData(subscriber: Subscriber) {
    this.subscriberForm.patchValue({
      firstName: subscriber?.firstName,
      lastName: subscriber?.lastName,
      companyName: subscriber?.companyName,
      oib: subscriber?.oib,
      email: subscriber?.email,
      phone: subscriber?.phone,
      billingAddress: subscriber?.billingAddress,
      legalEntity: subscriber?.legalEntity,
      city: subscriber?.city,
    });
  }

  onSubmit() {
    if (this.subscriberForm.invalid) {
      this.formError = true;
      return;
    } else {
      this.formError = false;
    }

    let subscriber: Subscriber = {
      firstName: this.subscriberForm.value.firstName,
      lastName: this.subscriberForm.value.lastName,
      companyName: this.subscriberForm.value.companyName,
      oib: this.subscriberForm.value.oib,
      email: this.subscriberForm.value.email,
      phone: this.subscriberForm.value.phone,
      billingAddress: this.subscriberForm.value.billingAddress,
      legalEntity: this.subscriberForm.value.legalEntity,
      city: this.subscriberForm.value.city,
    };

    if (this.editMode) {
      subscriber.id = this.data.subscriber.id;
      this.subscriberService
        .editSubscriber(subscriber)
        .subscribe(() => {
          this.dialogRef.close({event: 'Edit'});
        });
    } else {
      this.subscriberService.addSubscriber(subscriber).subscribe(() => {
        this.dialogRef.close({event: 'Submit'});
      });
    }
  }

  compareCities(city1: City, city2: City) {
    return city1 && city2 && city1.postcode == city2.postcode;
  }

}
