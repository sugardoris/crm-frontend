import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Publication } from '../../../domain/publication';
import { PublicationService } from '../../../service/publication.service';
import { registerLocaleData } from '@angular/common';
import localeHr from '@angular/common/locales/hr';
import { UserService } from '../../../service/user.service';
import { MatDialog } from '@angular/material/dialog';

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
  @Output() editEvent = new EventEmitter();
  @Output() deactivateEvent = new EventEmitter();
  @Output() detailsEvent = new EventEmitter();

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
    this.editEvent.emit(publication);
  }

  openDeactivateDialog(id: number) {
    this.deactivateEvent.emit(id);
  }

  openDetailsDialog(publication: Publication) {
    this.detailsEvent.emit(publication);
  }
}
