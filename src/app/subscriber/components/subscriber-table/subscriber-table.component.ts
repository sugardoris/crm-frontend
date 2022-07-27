import { Component, OnInit } from '@angular/core';
import {Subscriber} from "../../../domain/subscriber";

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
  {name: "Ime Prezime", oib: "12345678901", email: "email@email.com", phone: "123-234", address: "address", city: "city"},
  {name: "Ime Prezime", oib: "12345678901", email: "email@email.com", phone: "123-234", address: "address", city: "city"},
  {name: "Ime Prezime", oib: "12345678901", email: "email@email.com", phone: "123-234", address: "address", city: "city"},
  {name: "Ime Prezime", oib: "12345678901", email: "email@email.com", phone: "123-234", address: "address", city: "city"},
  {name: "Ime Prezime", oib: "12345678901", email: "email@email.com", phone: "123-234", address: "address", city: "city"},
  {name: "Ime Prezime", oib: "12345678901", email: "email@email.com", phone: "123-234", address: "address", city: "city"},
  {name: "Ime Prezime", oib: "12345678901", email: "email@email.com", phone: "123-234", address: "address", city: "city"},
  {name: "Ime Prezime", oib: "12345678901", email: "email@email.com", phone: "123-234", address: "address", city: "city"},
  {name: "Ime Prezime", oib: "12345678901", email: "email@email.com", phone: "123-234", address: "address", city: "city"},
  {name: "Ime Prezime", oib: "12345678901", email: "email@email.com", phone: "123-234", address: "address", city: "city"},
  {name: "Ime Prezime", oib: "12345678901", email: "email@email.com", phone: "123-234", address: "address", city: "city"},
  {name: "Ime Prezime", oib: "12345678901", email: "email@email.com", phone: "123-234", address: "address", city: "city"},
]
