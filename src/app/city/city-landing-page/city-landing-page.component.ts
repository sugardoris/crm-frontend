import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CityService} from '../../service/city.service';
import {City} from '../../domain/city';
import {Router} from '@angular/router';

@Component({
  selector: 'app-city-landing-page',
  templateUrl: './city-landing-page.component.html',
  styleUrls: ['./city-landing-page.component.css'],
})
export class CityLandingPageComponent implements OnInit {
  cities: City[] = [];
  loading: boolean = false;
  formError: boolean = false;

  cityFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    postcode: new FormControl('', [
      Validators.required,
      Validators.min(10000),
      Validators.max(53296),
    ]),
  });

  constructor(private cityService: CityService, private router: Router) {}

  ngOnInit(): void {
    this.loading = true;
    this.getCities();
  }

  getCities() {
    this.cityService
      .getCities()
      .subscribe((data) => {
        this.cities = data;
      })
      .add(() => (this.loading = false));
  }

  onSubmit() {
    if (this.cityFormGroup.invalid) {
      this.formError = true;
      return;
    } else {
      this.formError = false;
    }

    let newCity: City = {
      postcode: this.cityFormGroup.value.postcode.trim(),
      name: this.cityFormGroup.value.name.trim(),
    };

    this.cityService.addCity(newCity).subscribe((newCity) => {
      this.cities = [...this.cities, newCity];
      this.cities = this.cities.sort((a, b) => {
        if (a.postcode < b.postcode) return -1;
        if (a.postcode > b.postcode) return 1;
        else return 0;
      });
    });

    this.clearValidationErrors();
  }

  clearValidationErrors() {
    this.cityFormGroup.reset();
    this.cityFormGroup.get('name')?.setErrors(null);
    this.cityFormGroup.get('postcode')?.setErrors(null);
  }
}
