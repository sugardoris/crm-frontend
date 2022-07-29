import { Component, OnInit } from '@angular/core';
import {Ticket} from "../../../../domain/ticket";
import {TicketDetailsComponent} from "../ticket-details/ticket-details.component";
import {MatDialog} from "@angular/material/dialog";
import {TicketInputComponent} from "../ticket-input/ticket-input.component";

@Component({
  selector: 'app-subscriber-tickets',
  templateUrl: './subscriber-tickets.component.html',
  styleUrls: ['./subscriber-tickets.component.css']
})
export class SubscriberTicketsComponent implements OnInit {

  tableColumns: string[] = ["type", "dateCreated", "lastUpdate", "updatedBy", "resolved"];
  dataSource = TABLE_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDetailsDialog() {
    const dialogRef = this.dialog.open(TicketDetailsComponent);

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

const TABLE_DATA: Ticket[] = [
  {type: "Ticket type", dateCreated: "dd.MM.YYYY", lastUpdate: "dd.MM.YYYY", updatedBy: "admin", resolved: true},
  {type: "Ticket type", dateCreated: "dd.MM.YYYY", lastUpdate: "dd.MM.YYYY", updatedBy: "admin", resolved: false},
  {type: "Ticket type", dateCreated: "dd.MM.YYYY", lastUpdate: "dd.MM.YYYY", updatedBy: "admin", resolved: true},
  {type: "Ticket type", dateCreated: "dd.MM.YYYY", lastUpdate: "dd.MM.YYYY", updatedBy: "admin", resolved: false},
  {type: "Ticket type", dateCreated: "dd.MM.YYYY", lastUpdate: "dd.MM.YYYY", updatedBy: "admin", resolved: true},
  {type: "Ticket type", dateCreated: "dd.MM.YYYY", lastUpdate: "dd.MM.YYYY", updatedBy: "admin", resolved: false},
  {type: "Ticket type", dateCreated: "dd.MM.YYYY", lastUpdate: "dd.MM.YYYY", updatedBy: "admin", resolved: true}
]
