import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {City} from "../../domain/city";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {

  searchFormControl = new FormControl('');
  cityOptions: string[] = TABLE_DATA.map(value => value.name + ", " + value.postNumber);
  filteredCityOptions: Observable<string[]> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.filteredCityOptions = this.searchFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.cityOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

}

const TABLE_DATA: City[] = [
  {name: "Zagreb", postNumber: 10000},
  {name: "Split", postNumber: 21000},
  {name: "Rijeka", postNumber: 51000},
  {name: "Zadar", postNumber: 23000},
  {name: "Osijek", postNumber: 31000}
]
