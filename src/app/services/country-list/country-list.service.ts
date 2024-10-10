import { Injectable } from '@angular/core';
import Country from '../../list/Country-List';
@Injectable({
  providedIn: 'root'
})
export class CountryListService {
  private countries: Country[] = [];
  constructor() { }

  addCountry(
    name: string,
	  capital: string,
	  population: number,
  ): void {
    this.countries.push({
      name: name,
      capital: capital,
      population: population,
    });
  }

  getCountries(): Country[] {
    return this.countries;
  }
}
