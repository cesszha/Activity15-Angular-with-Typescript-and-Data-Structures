import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import AccessoryList from '../list/AcessorryList';
@Component({
  selector: 'app-accessory-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './accessory-list.component.html',
  styleUrl: './accessory-list.component.css'
})
export class AccessoryListComponent {
  accessoryList: AccessoryList[] = [];

	name: string = '';
	description: string = '';
	type: string = '';
	price: number = 0;
	category: string = '';

	addAccessory() {
		this.accessoryList.push({
			name: this.name,
			description: this.description,
			type: this.type,
			price: this.price,
			category: this.category,
		});

		this.name = '';
		this.description = '';
		this.type = '';
		this.price = 0;
		this.category = '';
	}
}
