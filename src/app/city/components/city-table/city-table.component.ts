import { Component, Input, OnInit } from '@angular/core';
import { City } from '../../../domain/city';

@Component({
  selector: 'app-city-table',
  templateUrl: './city-table.component.html',
  styleUrls: ['./city-table.component.css'],
})
export class CityTableComponent implements OnInit {
  tableColumns: string[] = ['name', 'postNumber'];
  @Input() dataSource: City[] = [];

  constructor() {}

  ngOnInit(): void {}
}
