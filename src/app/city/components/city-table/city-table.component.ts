import { Component, OnInit } from '@angular/core';
import {City} from "../../../domain/city";
import {CityService} from "../../city.service";

@Component({
  selector: 'app-city-table',
  templateUrl: './city-table.component.html',
  styleUrls: ['./city-table.component.css']
})
export class CityTableComponent implements OnInit {

  tableColumns: string[] = ["name", "postNumber"];
  cities: City[] = [];
  dataSource: City[] = [];
  loading: boolean = false;

  constructor(
    private cityService: CityService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getCities();
  }

  getCities() {
    this.cityService.getCities().subscribe(
      (data) => {
        this.cities = data;
        console.log(this.cities);
        this.dataSource = this.cities;
      }).add(() => this.loading = false);
  }

}

