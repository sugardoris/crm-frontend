import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { City } from '../../../domain/city';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
})
export class CitySearchComponent implements OnInit {
  searchFormControl = new FormControl('');
  cityOptions: string[] = TABLE_DATA.map(
    (value) => value.name + ', ' + value.postcode
  );
  filteredCityOptions: Observable<string[]> | undefined;

  constructor() {}

  ngOnInit(): void {
    this.filteredCityOptions = this.searchFormControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.cityOptions.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}

const TABLE_DATA: City[] = [
  { name: 'Zagreb', postcode: 10000 },
  { name: 'Split', postcode: 21000 },
  { name: 'Rijeka', postcode: 51000 },
  { name: 'Zadar', postcode: 23000 },
  { name: 'Osijek', postcode: 31000 },
];
