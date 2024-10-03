import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import CityList from '../list/CityList';
@Component({
  selector: 'app-city-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {
  cities: CityList[] = [];

	name: string = '';
	country: string = '';
	population: number = 0;

	addCity(): void {
		this.cities.push({
			name: this.name,
			country: this.country,
			population: this.population,
		});

		
		this.name = '';
		this.country = '';
		this.population = 0;
	}
}
