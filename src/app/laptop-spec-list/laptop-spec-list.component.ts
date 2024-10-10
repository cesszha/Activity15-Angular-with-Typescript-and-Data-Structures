import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import LaptopSpecs from '../list/LaptopSpecList';
import { LaptopSpecListService } from '../services/laptop-spec-list/laptop-spec-list.service';
@Component({
  selector: 'app-laptop-spec-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './laptop-spec-list.component.html',
  styleUrl: './laptop-spec-list.component.css'
})
export class LaptopSpecListComponent {
  laptops = [] as LaptopSpecs[];
  constructor(private laptopService: LaptopSpecListService){
	this.laptops = this.laptopService.getLaptopSpecs();
  }

	model: string = '';
	processor: string = '';
	ram: string = '';
	storage: string = '';
	display: string = '';
	graphics: string = '';

	addLaptop() {
		this.laptopService.addLaptopSpecs(
			this.model,
			this.processor,
			this.ram,
			this.storage,
			this.display,
			this.graphics,
			
		);
		this.model = '';
		this.processor = '';
		this.ram = '';
		this.storage = '';
		this.display = '';
		this.graphics = '';
	}
}
