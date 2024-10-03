import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import GroceryList from '../list/GroceyList';
@Component({
  selector: 'app-grocery-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})
export class GroceryListComponent {
  groceryList: GroceryList[] = [];

	name: string = '';
	price: number = 0;
	description: string = '';

	addGrocery() {
		this.groceryList.push({
			name: this.name,
			price: this.price,
			description: this.description,
		});
		this.name = '';
		this.price = 0;
		this.description = '';
	}
}
