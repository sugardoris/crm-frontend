import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Subscriber } from '../../../../domain/subscriber';
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

  @Input() subscribers: Subscriber[] = [];
  dataSource = new MatTableDataSource<Subscriber>();
  @Output() openDetailsPageEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Subscriber>(this.subscribers);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDetailsPage(id: number) {
    this.openDetailsPageEvent.emit(id);
  }
}

