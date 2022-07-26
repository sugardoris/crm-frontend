import { Component, OnInit } from '@angular/core';
import {Ticket} from "../../domain/ticket";

@Component({
  selector: 'app-subscriber-tickets',
  templateUrl: './subscriber-tickets.component.html',
  styleUrls: ['./subscriber-tickets.component.css']
})
export class SubscriberTicketsComponent implements OnInit {

  tableColumns: string[] = ["type", "dateCreated", "lastUpdate", "updatedBy", "resolved"];
  dataSource = TABLE_DATA;

  constructor() { }

  ngOnInit(): void {
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
