import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import CityList from '../list/CityList';
import { CityListService } from '../services/city-list/city-list.service';
@Component({
  selector: 'app-city-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {
  cities = [] as CityList[];
  constructor(private cityService: CityListService){
	this.cities = this.cityService.getCities();
  }

	name: string = '';
	country: string = '';
	population: number = 0;

	addCity(): void {
		this.cityService.addCity(
			this.name,
			this.country,
			this.population,
		);

		
		this.name = '';
		this.country = '';
		this.population = 0;
	}
}
