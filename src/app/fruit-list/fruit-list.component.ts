import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import FruitList from '../list/FruitList';
import { FruitListService } from '../services/fruit-list/fruit-list.service';
@Component({
  selector: 'app-fruit-list',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.css'
})
export class FruitListComponent {
  fruits = [] as FruitList[];
  constructor(private fruitService: FruitListService){
	this.fruits = this.fruitService.getFruits();
  }

	id: string = '';
	name: string = '';
	quantity: number = 0;
	price: number = 0;

	addFruit(): void {
		this.fruitService.addFruit(
			this.id,
			this.name,
			this.quantity,
		    this.price,
		);

		this.id = '';
		this.name = '';
		this.quantity = 0;
		this.price = 0;
	}
}
