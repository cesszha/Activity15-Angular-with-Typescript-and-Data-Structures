import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import CarModel from '../list/CarModelList';

@Component({
  selector: 'app-car-model-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './car-model-list.component.html',
  styleUrl: './car-model-list.component.css'
})
export class CarModelListComponent {
  carModels: CarModel[] = [];
	name: string = '';
	year: number = 0;
	model: string = '';
	price: number = 0;

	addCarModel(): void {
		this.carModels.push({
			name: this.name,
			year: this.year,
			model: this.model,
			price: this.price,
		});

		this.name = '';
		this.year = 0;
		this.model = '';
		this.price = 0;
	}
}
