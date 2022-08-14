import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  SubscriptionType,
  SubscriptionPeriod,
} from '../../../domain/subscriptionType';
import { SubscriptionTypeService } from '../../../service/subscription-type.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-subscription-type-input',
  templateUrl: './subscription-type-input.component.html',
  styleUrls: ['./subscription-type-input.component.css'],
})
export class SubscriptionTypeInputComponent implements OnInit {
  editMode: boolean = false;
  subscriptionType?: SubscriptionType;
  periodOptions = Object.values(SubscriptionPeriod);

  subscriptionTypeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    discount: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(100),
    ]),
    period: new FormControl('', Validators.required),
  });

  constructor(
    private subscriptionTypeService: SubscriptionTypeService,
    public dialogRef: MatDialogRef<SubscriptionTypeInputComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { subscriptionType: SubscriptionType; mode: string }
  ) {}

  ngOnInit(): void {
    this.checkMode();
  }

  checkMode() {
    if (this.data.mode === 'Edit') {
      this.editMode = true;
      this.getSubscriptionTypeData(this.data.subscriptionType);
    }
  }

  getSubscriptionTypeData(subscriptionType: SubscriptionType) {
    this.subscriptionTypeForm.patchValue({
      name: subscriptionType.name,
      discount: subscriptionType.discount,
      period: subscriptionType.subscriptionPeriod,
    });
  }

  onSubmit() {
    this.subscriptionType = {
      name: this.subscriptionTypeForm.value.name,
      discount: this.subscriptionTypeForm.value.discount,
      subscriptionPeriod: this.subscriptionTypeForm.value.period,
    };

    if (this.editMode) {
      this.subscriptionType.id = this.data.subscriptionType.id;
      this.subscriptionTypeService
        .editSubscriptionType(this.subscriptionType)
        .subscribe((data) => {
          this.dialogRef.close({ event: 'Edit' });
        });
    } else {
      this.subscriptionTypeService
        .addSubscriptionType(this.subscriptionType)
        .subscribe((data) => {
          this.dialogRef.close({ event: 'Submit' });
        });
    }
  }
}
