import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Vegetables from '../list/VegetableList';
import { VegetableListService } from '../services/vegetable-list/vegetable-list.service';
@Component({
  selector: 'app-vegetable-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
  vegetables = [] as Vegetables[];
	constructor (private vegetableListService: VegetableListService){
		this.vegetables = this.vegetableListService.getVegetables();
	}
	
	vegetable: string = '';
	price: number = 0;
  

	addVegetable(): void {
		this.vegetableListService.addVegetable(
		
			this.vegetable,
			this.price,
		);

	
		this.vegetable = '';
		this.price = 0;
	}
}
