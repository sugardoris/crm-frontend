import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../../domain/ticket';
import { TicketDetailsComponent } from '../ticket-details/ticket-details.component';
import { MatDialog } from '@angular/material/dialog';
import { TicketInputComponent } from '../ticket-input/ticket-input.component';
import { TicketService } from '../../../../service/ticket.service';
import { ActivatedRoute } from '@angular/router';

import { registerLocaleData } from '@angular/common';
import localeHr from '@angular/common/locales/hr';
import {SubscriptionInputComponent} from "../../subscription/subscription-input/subscription-input.component";
import {DeactivateModalComponent} from "../../../../common/deactivate-modal/deactivate-modal.component";

registerLocaleData(localeHr, 'hr');

@Component({
  selector: 'app-subscriber-tickets',
  templateUrl: './subscriber-tickets.component.html',
  styleUrls: ['./subscriber-tickets.component.css'],
})
export class SubscriberTicketsComponent implements OnInit {
  tableColumns: string[] = [
    'type',
    'dateCreated',
    'createdBy',
    'lastUpdate',
    'updatedBy',
    'resolved',
  ];
  dataSource: Ticket[] = [];
  loading: boolean = false;

  constructor(
    public dialog: MatDialog,
    private ticketService: TicketService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.getTickets();
  }

  getTickets() {
    const subscriberId = this.route.snapshot.paramMap.get('id');

    if (subscriberId !== null) {
      this.ticketService
        .getTickets(subscriberId)
        .subscribe((data) => {
          this.dataSource = data;
        })
        .add(() => (this.loading = false));
    } else {
      console.error('Subscriber id cannot be null.');
    }
  }

  openDetailsDialog(ticket: Ticket) {
    const dialogRef = this.dialog.open(TicketDetailsComponent, {
      data: ticket,
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(TicketInputComponent, {
      data: {mode: 'Add', subscriberId: this.route.snapshot.paramMap.get('id')}
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Submit') {
        this.getTickets();
      }
    });
  }

  openEditDialog(ticket: Ticket) {
    const dialogRef = this.dialog.open(TicketInputComponent, {
      data: { ticket: ticket, mode: 'Edit', subscriberId: this.route.snapshot.paramMap.get('id') },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Edit') {
        this.getTickets();
      }
    });
  }

  openDeleteDialog(id: number, entity = 'ticket') {
    const dialogRef = this.dialog.open(DeactivateModalComponent, {
      data: entity,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Deactivate') {
        this.deleteTicket(id);
      }
    });
  }

  deleteTicket(id: number) {
    this.ticketService.deleteTicket(id).subscribe((result) => {
      this.getTickets();
    })
  }

  openResolveDialog(id: number, entity = 'ticket') {
    const dialogRef = this.dialog.open(DeactivateModalComponent, {
      data: entity,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Deactivate') {
        this.resolveTicket(id);
      }
    });
  }

  resolveTicket(id: number) {
    this.ticketService.resolveTicket(id).subscribe((result) => {
      this.getTickets();
    })
  }
}
