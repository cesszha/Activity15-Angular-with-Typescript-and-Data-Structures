import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Country from '../list/Country-List';
import { CountryListService } from '../services/country-list/country-list.service';
@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {
  countries = [] as Country[];
  constructor(private countryListService: CountryListService){
	this.countries = this.countryListService.getCountries();
  }
	
	name: string = '';
	capital: string = '';
	population: number = 0;

	addCountry(): void {
		this.countryListService.addCountry(
			this.name,
			this.capital,
			this.population,
		);

		this.name = '';
		this.capital = '';
		this.population = 0;
	}
}
