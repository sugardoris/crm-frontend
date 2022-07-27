import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-subscriber-search',
  templateUrl: './subscriber-search.component.html',
  styleUrls: ['./subscriber-search.component.css']
})
export class SubscriberSearchComponent implements OnInit {

  searchFormControl = new FormControl('');
  cityOptions: string[] = ['Zagreb', 'Split', 'Rijeka', 'Osijek', 'Zadar'];
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
