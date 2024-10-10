import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import LaptopList from '../list/LaptopList';
import { LaptopListService } from '../services/laptop-list/laptop-list.service';
@Component({
  selector: 'app-laptop-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './laptop-list.component.html',
  styleUrl: './laptop-list.component.css'
})
export class LaptopListComponent {
  laptops = [] as LaptopList[];
	constructor(private laptopService: LaptopListService){
		this.laptops = this.laptopService.getLaptops();
	}
	id: number = 0;
	model: string = '';
	brand: string = '';
	price: number = 0;
	processor: string = '';
	ram: string = '';
	storage: string = '';
	display: string = '';
	graphics: string = '';

	addLaptop() {
		this.laptopService.addLaptop(
			this.id,
			this.model,
			this.brand,
			this.price,
			this.processor,
			this.ram,
			this.storage,
			this.display,
			this.graphics,
		);
		this.id = 0;
		this.model = '';
		this.brand = '';
		this.price = 0;
		this.processor = '';
		this.ram = '';
		this.storage = '';
		this.display = '';
		this.graphics = '';
	}
}
