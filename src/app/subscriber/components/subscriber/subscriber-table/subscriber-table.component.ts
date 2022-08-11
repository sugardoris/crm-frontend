import { Component, OnInit } from '@angular/core';
import {Subscriber} from "../../../../domain/subscriber";

@Component({
  selector: 'app-subscriber-table',
  templateUrl: './subscriber-table.component.html',
  styleUrls: ['./subscriber-table.component.css']
})
export class SubscriberTableComponent implements OnInit {

  tableColumns: string[] = ["name", "oib", "email", "phone", "address", "city"];
  dataSource = TABLE_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

const TABLE_DATA: Subscriber[] = [
]
