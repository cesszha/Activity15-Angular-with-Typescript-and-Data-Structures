import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import AccessoryList from '../list/AcessorryList';
import { AccessoryListService } from '../services/accessory-list/accessory-list.service';
@Component({
  selector: 'app-accessory-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './accessory-list.component.html',
  styleUrl: './accessory-list.component.css'
})
export class AccessoryListComponent {
  accessoryList: AccessoryList[] = [];
  constructor(private accessoryService: AccessoryListService){
	this.accessoryList = this.accessoryService.getAccessories();
  }

	name: string = '';
	description: string = '';
	type: string = '';
	price: number = 0;
	category: string = '';

	addAccessory() {
		this.accessoryService.addAccessory(
			this.name,
			this.description,
			this.price,
			this.type,
			this.category,
		)

		this.name = '';
		this.description = '';
		this.type = '';
		this.price = 0;
		this.category = '';
	}
}
