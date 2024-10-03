import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Country from '../list/Country-List';
@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {
  countries: Country[] = [];

	
	name: string = '';
	capital: string = '';
	population: string = '';

	addCountry(): void {
		this.countries.push({
			name: this.name,
			capital: this.capital,
			population: Number(this.population),
		});

		this.name = '';
		this.capital = '';
		this.population = '';
	}
}
