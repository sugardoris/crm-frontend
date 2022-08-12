import { Component, OnInit } from '@angular/core';
import {Ticket} from "../../../../domain/ticket";
import {TicketDetailsComponent} from "../ticket-details/ticket-details.component";
import {MatDialog} from "@angular/material/dialog";
import {TicketInputComponent} from "../ticket-input/ticket-input.component";
import {TicketService} from "../../../../service/ticket.service";
import {ActivatedRoute} from "@angular/router";

import { registerLocaleData } from '@angular/common';
import localeHr from '@angular/common/locales/hr';
registerLocaleData(localeHr, 'hr');

@Component({
  selector: 'app-subscriber-tickets',
  templateUrl: './subscriber-tickets.component.html',
  styleUrls: ['./subscriber-tickets.component.css']
})
export class SubscriberTicketsComponent implements OnInit {

  tableColumns: string[] = ["type", "dateCreated", "createdBy", "lastUpdate", "updatedBy", "resolved"];
  tickets: Ticket[] = [];
  dataSource: Ticket[] = [];
  loading: boolean = false;

  constructor(
    public dialog: MatDialog,
    private ticketService: TicketService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getTickets();
  }

  getTickets() {
    const subscriberId = this.route.snapshot.paramMap.get('id');

    if (subscriberId !== null) {
      this.ticketService.getTickets(subscriberId).subscribe(
        (data) => {
          this.tickets = data;
          this.dataSource = this.tickets;
        }
      ).add(() => this.loading = false)
    } else {
      console.error('Subscriber id cannot be null.')
    }
  }

  openDetailsDialog(ticket: Ticket) {
    const dialogRef = this.dialog.open(
      TicketDetailsComponent,
      {data: ticket});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(TicketInputComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
