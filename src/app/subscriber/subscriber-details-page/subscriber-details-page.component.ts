import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Subscription} from "../../domain/subscription";
import {MatDialog} from "@angular/material/dialog";
import {SubscriptionService} from "../../service/subscription.service";
import {Ticket} from "../../domain/ticket";
import {TicketService} from "../../service/ticket.service";
import {ActivatedRoute} from "@angular/router";
import {SubscriptionInputComponent} from "../components/subscription/subscription-input/subscription-input.component";
import {ActionModalComponent} from "../../common/action-modal/action-modal.component";
import {
  SubscriptionDetailsComponent
} from "../components/subscription/subscription-details/subscription-details.component";
import {TicketInputComponent} from "../components/ticket/ticket-input/ticket-input.component";
import {TicketDetailsComponent} from "../components/ticket/ticket-details/ticket-details.component";

@Component({
  selector: 'app-subscriber-details-page',
  templateUrl: './subscriber-details-page.component.html',
  styleUrls: ['./subscriber-details-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SubscriberDetailsPageComponent implements OnInit {

  subscriptions: Subscription[] = [];
  tickets: Ticket[] = [];
  loading: boolean = false;
  subscriberId = this.route.snapshot.paramMap.get('id');

  constructor(
    public dialog: MatDialog,
    private subscriptionService: SubscriptionService,
    private ticketService: TicketService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.fetchSubscriberItems().then(() => this.loading = false);
  }

  async fetchSubscriberItems() {
    if (this.subscriberId != null) {
      this.subscriptionService
        .getSubscriptions(this.subscriberId)
        .subscribe((data) => {
          this.subscriptions = data;
        });
      this.ticketService
        .getTickets(this.subscriberId)
        .subscribe((data) => {
          this.tickets = data;
        });
    } else {
      console.error('Subscriber id cannot be null.');
    }
  }

  openSubscriptionAddDialog() {
    const dialogRef = this.dialog.open(SubscriptionInputComponent, {
      data: {
        mode: 'Add',
        subscriberId: this.route.snapshot.paramMap.get('id'),
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getSubscriptions();
    });
  }

  openSubscriptionEditDialog(subscription: Subscription) {
    const dialogRef = this.dialog.open(SubscriptionInputComponent, {
      data: {
        subscription: subscription,
        mode: 'Edit',
        subscriberId: this.route.snapshot.paramMap.get('id'),
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getSubscriptions();
    });
  }

  openSubscriptionDeactivateDialog(subscription: Subscription, entity = 'subscription') {
    const dialogRef = this.dialog.open(ActionModalComponent, {
      data: {entity: entity, action: 'Deactivate'},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event === 'Deactivate') {
        this.deactivateSubscription(subscription);
      }
    });
  }

  openSubscriptionDetailsDialog(subscription: Subscription) {
    this.dialog.open(SubscriptionDetailsComponent, {
      data: subscription,
    });
  }

  getSubscriptions() {
    if (this.subscriberId != null) {
      this.subscriptionService
        .getSubscriptions(this.subscriberId)
        .subscribe((data) => {
          this.subscriptions = data;
        })
        .add(() => (this.loading = false));
    } else {
      console.error('Subscriber id cannot be null.');
    }
  }

  deactivateSubscription(subscription: Subscription) {
    subscription.dateEnded = new Date().toISOString();
    this.subscriptionService
      .editSubscription(subscription)
      .subscribe(() => {
        this.getSubscriptions();
      });
  }

  openTicketAddDialog() {
    const dialogRef = this.dialog.open(TicketInputComponent, {
      data: {
        mode: 'Add',
        subscriberId: this.route.snapshot.paramMap.get('id'),
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getTickets();
    });
  }

  openTicketEditDialog(ticket: Ticket) {
    const dialogRef = this.dialog.open(TicketInputComponent, {
      data: {
        ticket: ticket,
        mode: 'Edit',
        subscriberId: this.route.snapshot.paramMap.get('id'),
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getTickets();
    });
  }

  openTicketDeleteDialog(id: number, entity = 'ticket') {
    const dialogRef = this.dialog.open(ActionModalComponent, {
      data: {entity: entity, action: 'Delete'},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == "Delete") {
        this.deleteTicket(id);
      }
    });
  }

  openTicketResolveDialog(id: number, entity = 'ticket') {
    const dialogRef = this.dialog.open(ActionModalComponent, {
      data: {entity: entity, action: 'Resolve'},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == "Resolve") {
        this.resolveTicket(id);
      }
    });
  }

  openTicketDetailsDialog(ticket: Ticket) {
    this.dialog.open(TicketDetailsComponent, {
      data: ticket,
    });
  }

  getTickets() {
    if (this.subscriberId != null) {
      this.ticketService
        .getTickets(this.subscriberId)
        .subscribe((data) => {
          this.tickets = data;
        })
        .add(() => (this.loading = false));
    } else {
      console.error('Subscriber id cannot be null.');
    }
  }

  deleteTicket(id: number) {
    this.ticketService.deleteTicket(id).subscribe(() => {
      this.getTickets();
    });
  }

  resolveTicket(id: number) {
    this.ticketService.resolveTicket(id).subscribe(() => {
      this.getTickets();
    });
  }
}
