import { Injectable } from '@angular/core';
import CityList from '../../list/CityList';
@Injectable({
  providedIn: 'root'
})
export class CityListService {
    private cities: CityList[] = [];

  constructor() {}

  addCity(
    name: string,
    country: string,
    population: number,
  ): void {
    this.cities.push({
      name: name,
      country: country,
      population: population,
    });
  }
  getCities(): CityList[] {
    return this.cities;
  }
}
