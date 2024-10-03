import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Vegetables from '../list/VegetableList';
@Component({
  selector: 'app-vegetable-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
  vegetables: Vegetables[] = [];

	
	vegetable: string = '';
	price: string = '';
  

	addVegetable(): void {
		this.vegetables.push({
		
			vegetable: this.vegetable,
			price: Number(this.price),
		});

	
		this.vegetable = '';
		this.price = '';
	}
}
