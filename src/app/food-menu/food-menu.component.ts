import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import FoodMenuList from '../list/FoodMenu';
import { FoodMenuListService } from '../services/food-menu-list/food-menu-list.service';
@Component({
  selector: 'app-food-menu',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.css'
})
export class FoodMenuComponent {
  foodMenuList = [] as FoodMenuList[];
	constructor(private foodMenuService: FoodMenuListService){
		this.foodMenuList = this.foodMenuService.getFoodMenus();
	}
	name: string = '';
	price: number = 0;
	description: string = '';
	rating: number = 0;

	addFoodMenu() {
		this.foodMenuService.addFoodMenu(
			this.name,
			this.price,
			this.description,
			this.rating,
		);
		this.name = '';
		this.price = 0;
		this.description = '';
		this.rating = 0;
	}
}
