import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import FurnitureList from '../list/FurnitureList';
import { FurnitureListService } from '../services/furniture-list/furniture-list.service';
@Component({
  selector: 'app-furniture-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './furniture-list.component.html',
  styleUrl: './furniture-list.component.css'
})
export class FurnitureListComponent {
  furnitureList = [] as FurnitureList[];
  constructor(private furnitureService: FurnitureListService){
	this.furnitureList = this.furnitureService.getFurnitures();
  }

	name: string = '';
	description: string = '';
	type: string = '';
	price: number = 0;
	category: string = '';

	addFurniture() {
		this.furnitureService.addFurniture(
			this.name,
			this.description,
			this.type,
			this.price,
			this.category,
		);
		this.name = '';
		this.description = '';
		this.type = '';
		this.price = 0;
		this.category = '';
	}
}
