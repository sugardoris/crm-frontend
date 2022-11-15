import { Component, OnInit } from '@angular/core';
import { Subscriber } from '../../../../domain/subscriber';
import { SubscriberService } from '../../../../service/subscriber.service';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-subscriber-table',
  templateUrl: './subscriber-table.component.html',
  styleUrls: ['./subscriber-table.component.css'],
})
export class SubscriberTableComponent implements OnInit {
  tableColumns: string[] = [
    'name',
    'oib',
    'email',
    'phone',
    'address',
    'city',
    'active',
  ];
  subscribers: Subscriber[] = [];
  dataSource = new MatTableDataSource<Subscriber>();
  loading: boolean = false;

  constructor(private subscriberService: SubscriberService) {}

  ngOnInit(): void {
    this.loading = true;
    this.getSubscribers();
  }

  getSubscribers() {
    this.subscriberService
      .getSubscribers()
      .subscribe((data) => {
        this.subscribers = data;
        this.dataSource = new MatTableDataSource<Subscriber>(this.subscribers);
      })
      .add(() => (this.loading = false));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

