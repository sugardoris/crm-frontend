import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Ticket, TicketType} from "../../../domain/ticket";

@Component({
  selector: 'app-ticket-input',
  templateUrl: './ticket-input.component.html',
  styleUrls: ['./ticket-input.component.css']
})
export class TicketInputComponent implements OnInit {

  editMode: boolean = false;
  ticket?: Ticket;
  typeOptions = Object.values(TicketType);


  ticketForm = new FormGroup({
    type: new FormControl(''),
    description: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }

}
