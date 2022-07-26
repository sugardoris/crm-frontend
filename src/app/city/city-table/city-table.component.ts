import { Component, OnInit } from '@angular/core';
import {City} from "../../domain/city";

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
  {name: "Zagreb", postNumber: 10000},
  {name: "Split", postNumber: 21000},
  {name: "Rijeka", postNumber: 51000},
  {name: "Zadar", postNumber: 23000},
  {name: "Osijek", postNumber: 31000}
]
