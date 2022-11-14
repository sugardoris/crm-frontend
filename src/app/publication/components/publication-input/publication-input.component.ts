import { Component, Inject, OnInit } from '@angular/core';
import {
  Publication,
  PublicationPeriod,
} from '../../../domain/publication';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_DATE_FORMAT } from '../../../domain/date_format';
import { PublicationService } from '../../../service/publication.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-publication-input',
  templateUrl: './publication-input.component.html',
  styleUrls: ['./publication-input.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT },
  ],
})
export class PublicationInputComponent implements OnInit {
  editMode: boolean = false;
  publication?: Publication;
  periodOptions = Object.values(PublicationPeriod);
  formError: boolean = false;

  publicationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    firstIssue: new FormControl(new Date(), Validators.required),
    issuePeriod: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    comesOut: new FormControl('', Validators.required),
  });

  constructor(
    private publicationService: PublicationService,
    public dialogRef: MatDialogRef<PublicationInputComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { publication: Publication; mode: string }
  ) {}

  ngOnInit(): void {
    this.checkMode();
  }

  checkMode() {
    if (this.data.mode === 'Edit') {
      this.editMode = true;
      this.getPublicationData(this.data.publication);
    }
  }

  onSubmit() {
    if (this.publicationForm.invalid) {
      this.formError = true;
      return;
    } else {
      this.formError = false;
    }

    let publication: Publication = {
      name: this.publicationForm.value.name,
      firstIssueDate: this.publicationForm.value.firstIssue,
      issuePeriod: this.publicationForm.value.issuePeriod,
      comesOut: this.publicationForm.value.comesOut,
      price: this.publicationForm.value.price,
    };

    if (this.editMode) {
      publication.id = this.data.publication.id;

      this.publicationService.editPublication(publication).subscribe((data) => {
        this.dialogRef.close({ event: 'Edit' });
      });
    } else {
      this.publicationService.addPublication(publication).subscribe((data) => {
        this.dialogRef.close({ event: 'Submit' });
      });
    }
  }

  getPublicationData(publication: Publication) {
    this.publicationForm.patchValue({
      name: publication.name,
      firstIssue: new Date(publication.firstIssueDate),
      issuePeriod: publication.issuePeriod,
      price: publication.price,
      comesOut: publication.comesOut,
    });
  }
}
