import { Component, OnInit } from '@angular/core';
import {Subscriber} from "../../domain/subscriber";
import {SubscriberService} from "../../service/subscriber.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {SubscriberInputComponent} from "../components/subscriber/subscriber-input/subscriber-input.component";

@Component({
  selector: 'app-subscriber-landing-page',
  templateUrl: './subscriber-landing-page.component.html',
  styleUrls: ['./subscriber-landing-page.component.css'],
})
export class SubscriberLandingPageComponent implements OnInit {

  subscribers: Subscriber[] = [];
  loading: boolean = false;

  constructor(
    private subscriberService: SubscriberService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.getSubscribers();
  }

  getSubscribers() {
    this.subscriberService
      .getSubscribers()
      .subscribe((data) => {
        this.subscribers = data;
      })
      .add(() => (this.loading = false));
  }

  openDetailsPage(id: number) {
    this.router.navigateByUrl('/subscribers/' + id);
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(SubscriberInputComponent, {
      data: { mode: 'Add'}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getSubscribers();
    })
  }
}
