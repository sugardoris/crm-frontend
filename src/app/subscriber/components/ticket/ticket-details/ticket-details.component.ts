import { Component, Inject, OnInit } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeHr from '@angular/common/locales/hr';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ticket } from '../../../../domain/ticket';

registerLocaleData(localeHr, 'hr');

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css'],
})
export class TicketDetailsComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public ticket: Ticket) {}

  ngOnInit(): void {}
}
