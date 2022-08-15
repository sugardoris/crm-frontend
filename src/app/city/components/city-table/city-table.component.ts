import { Component, Input, OnInit } from '@angular/core';
import { City } from '../../../domain/city';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-city-table',
  templateUrl: './city-table.component.html',
  styleUrls: ['./city-table.component.css'],
})
export class CityTableComponent implements OnInit {
  tableColumns: string[] = ['name', 'postNumber'];
  @Input() cities: City[] = [];
  dataSource = new MatTableDataSource<City>();

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<City>(this.cities);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
