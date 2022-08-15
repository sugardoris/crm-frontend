import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Ticket, TicketType} from "../../../../domain/ticket";
import {TicketService} from "../../../../service/ticket.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

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

  constructor(
    private ticketService: TicketService,
    public dialogRef: MatDialogRef<TicketInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {ticket: Ticket, mode: string, subscriberId: number}
  ) { }

  ngOnInit(): void {
    this.checkMode();
  }

  checkMode() {
    if (this.data.mode === 'Edit') {
      this.editMode = true;
      this.getTicketData(this.data.ticket)
    }
  }

  onSubmit() {
    this.ticket = {
      subscriberId: this.data.subscriberId,
      type: this.ticketForm.value.type,
      description: this.ticketForm.value.description
    }

    if (this.editMode) {
      this.ticket.id = this.data.ticket.id;

      this.ticketService.editTicket(this.ticket).subscribe((result) => {
        this.dialogRef.close({event: 'Edit'});
      })
    } else {
      this.ticketService.addTicket(this.ticket).subscribe((result) => {
        this.dialogRef.close({event: 'Submit'})
      })
    }
  }

  getTicketData(ticket: Ticket) {
    this.ticketForm.patchValue({
      type: ticket.type,
      description: ticket.description
    })
  }

}
