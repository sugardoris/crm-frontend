import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Publication } from '../../../domain/publication';
import { PublicationService } from '../../../service/publication.service';
import { registerLocaleData } from '@angular/common';
import localeHr from '@angular/common/locales/hr';
import { UserService } from '../../../service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { PublicationInputComponent } from '../publication-input/publication-input.component';
import { DeactivateModalComponent } from '../../../common/deactivate-modal/deactivate-modal.component';
import { PublicationDetailsComponent } from '../publication-details/publication-details.component';

registerLocaleData(localeHr, 'hr');

@Component({
  selector: 'app-publication-table',
  templateUrl: './publication-table.component.html',
  styleUrls: ['./publication-table.component.css'],
})
export class PublicationTableComponent implements OnInit {
  tableColumns: string[] = [
    'name',
    'firstIssue',
    'issuePeriod',
    'comesOut',
    'price',
    'active',
  ];
  @Input() dataSource: Publication[] = [];

  isUserAdmin: boolean = false;
  @Output() publicationEvent = new EventEmitter();

  constructor(
    private publicationService: PublicationService,
    private userService: UserService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.checkIsUserAdmin();
  }

  checkIsUserAdmin() {
    this.isUserAdmin = this.userService.isRoleAdmin();
  }

  openEditDialog(publication: Publication) {
    const dialogRef = this.dialog.open(PublicationInputComponent, {
      data: { publication: publication, mode: 'Edit' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Edit') {
        this.publicationEvent.emit();
      }
    });
  }

  openDeactivateDialog(id: number, entity = 'publication') {
    const dialogRef = this.dialog.open(DeactivateModalComponent, {
      data: entity,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Deactivate') {
        this.deactivatePublication(id);
      }
    });
  }

  deactivatePublication(id: number) {
    this.publicationService.archivePublication(id).subscribe((data) => {
      this.publicationEvent.emit();
    });
  }

  openDetailsDialog(publication: Publication) {
    const dialogRef = this.dialog.open(PublicationDetailsComponent, {
      data: publication,
    });
  }
}
