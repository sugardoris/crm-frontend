import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Ticket } from '../../../../domain/ticket';
import { MatDialog } from '@angular/material/dialog';
import { registerLocaleData } from '@angular/common';
import localeHr from '@angular/common/locales/hr';

registerLocaleData(localeHr, 'hr');

@Component({
  selector: 'app-tickets-table',
  templateUrl: './tickets-table.component.html',
  styleUrls: ['./tickets-table.component.css'],
})
export class TicketsTableComponent implements OnInit {
  tableColumns: string[] = [
    'type',
    'dateCreated',
    'createdBy',
    'lastUpdate',
    'updatedBy',
    'resolved',
  ];
  @Input() dataSource: Ticket[] = [];
  loading: boolean = false;

  @Output() addEvent = new EventEmitter();
  @Output() editEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();
  @Output() resolveEvent = new EventEmitter();
  @Output() detailsEvent = new EventEmitter();

  constructor(
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
  }

  openAddDialog() {
    this.addEvent.emit();
  }

  openEditDialog(ticket: Ticket) {
    this.editEvent.emit(ticket);
  }

  openDeleteDialog(id: number) {
    this.deleteEvent.emit(id);
  }

  openResolveDialog(id: number) {
    this.resolveEvent.emit(id);
  }

  openDetailsDialog(ticket: Ticket) {
    this.detailsEvent.emit(ticket);
  }
}
