import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from '../../../../domain/subscription';
import { Publication } from '../../../../domain/publication';
import { SubscriptionType } from '../../../../domain/subscriptionType';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_DATE_FORMAT } from '../../../../domain/date_format';
import { PublicationService } from '../../../../service/publication.service';
import { SubscriptionTypeService } from '../../../../service/subscription-type.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SubscriptionService } from '../../../../service/subscription.service';

@Component({
  selector: 'app-subscription-input',
  templateUrl: './subscription-input.component.html',
  styleUrls: ['./subscription-input.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT },
  ],
})
export class SubscriptionInputComponent implements OnInit {
  editMode: boolean = false;
  subscription?: Subscription;
  publicationOptions: Publication[] = [];
  typeOptions: SubscriptionType[] = [];

  subscriptionForm = new FormGroup({
    publication: new FormControl('', Validators.required),
    subscriptionType: new FormControl('', Validators.required),
    startDate: new FormControl(new Date(), Validators.required),
    endDate: new FormControl('', Validators.required),
  });

  constructor(
    private publicationService: PublicationService,
    private subscriptionTypeService: SubscriptionTypeService,
    private subscriptionService: SubscriptionService,
    public dialogRef: MatDialogRef<SubscriptionInputComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      subscription: Subscription;
      mode: string;
      subscriberId: number;
    }
  ) {}

  ngOnInit(): void {
    this.getPublications();
    this.getSubscriptionTypes();
    this.checkMode();
  }

  checkMode() {
    if (this.data.mode === 'Edit') {
      this.editMode = true;
      this.getSubscriptionData(this.data.subscription);
    }
  }

  onSubmit() {
    this.subscription = {
      subscriptionTypeId: this.subscriptionForm.value.subscriptionType.id,
      subscriberId: this.data.subscriberId,
      publicationId: this.subscriptionForm.value.publication.id,
      dateStarted: this.subscriptionForm.value.startDate,
      dateEnded: this.subscriptionForm.value.endDate,
    };

    if (this.editMode) {
      this.subscription.id = this.data.subscription.id;

      this.subscriptionService
        .editSubscription(this.subscription)
        .subscribe((result) => {
          this.dialogRef.close({ event: 'Edit' });
        });
    } else {
      this.subscriptionService
        .addSubscription(this.subscription)
        .subscribe((result) => {
          this.dialogRef.close({ event: 'Submit' });
        });
    }
  }

  getSubscriptionData(subscription: Subscription) {
    this.subscriptionForm.patchValue({
      startDate: new Date(subscription.dateStarted),
      endDate: subscription.dateEnded ? new Date(subscription.dateEnded) : '',
    });
  }

  getPublications() {
    this.publicationService.getActivePublications().subscribe((result) => {
      this.publicationOptions = result;
      if (this.editMode) {
        this.subscriptionForm.patchValue({
          publication: this.publicationOptions.find(
            (publication) =>
              publication.id == this.data.subscription.publicationId
          ),
        });
      }
    });
  }

  getSubscriptionTypes() {
    this.subscriptionTypeService.getActiveSubscriptionTypes().subscribe((result) => {
      this.typeOptions = result;
      if (this.editMode) {
        this.subscriptionForm.patchValue({
          subscriptionType: this.typeOptions.find(
            (type) => type.id == this.data.subscription.subscriptionTypeId
          ),
        });
      }
    });
  }

  compareEntities(entity1: any, entity2: any) {
    return entity1 && entity2 && entity1.id == entity2.id;
  }
}
