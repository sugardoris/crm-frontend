import { Component, OnInit } from '@angular/core';
import {City} from "../../../domain/city";

@Component({
  selector: 'app-city-table',
  templateUrl: './city-table.component.html',
  styleUrls: ['./city-table.component.css']
})
export class CityTableComponent implements OnInit {

  tableColumns: string[] = ["name", "postNumber"];
  dataSource = TABLE_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

const TABLE_DATA: City[] = [
  {name: "Zagreb", postcode: 10000},
  {name: "Split", postcode: 21000},
  {name: "Rijeka", postcode: 51000},
  {name: "Zadar", postcode: 23000},
  {name: "Osijek", postcode: 31000}
]
