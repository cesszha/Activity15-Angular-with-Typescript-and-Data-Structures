import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import FoodMenuList from '../list/FoodMenu';
@Component({
  selector: 'app-food-menu',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.css'
})
export class FoodMenuComponent {
  foodMenuList: FoodMenuList[] = [];

	name: string = '';
	price: number = 0;
	description: string = '';
	rating: number = 0;

	addFoodMenu() {
		this.foodMenuList.push({
			name: this.name,
			price: this.price,
			description: this.description,
			rating: this.rating,
		});
		this.name = '';
		this.price = 0;
		this.description = '';
		this.rating = 0;
	}
}
