import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import GroceryList from '../list/GroceyList';
import { GroceryListService } from '../services/grocery-list/grocery-list.service';
@Component({
  selector: 'app-grocery-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})
export class GroceryListComponent {
  groceryList = [] as GroceryList[];
  constructor(private groceryService: GroceryListService){
	this.groceryService.getGroceries();
  }

	name: string = '';
	price: number = 0;
	description: string = '';

	addGrocery() {
		this.groceryService.addGrocery(
			this.name,
			this.price,
			this.description,
		);
		this.name = '';
		this.price = 0;
		this.description = '';
	}
}
