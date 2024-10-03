import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import ToolList from '../list/ToolList';
@Component({
  selector: 'app-tool-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.css'
})
export class ToolListComponent {
  tools: ToolList[] = [];

	name: string = '';
	description: string = '';
	price: string = '';
	quantity: string = '';

	addTool(): void {
		this.tools.push({
			name: this.name,
			description: this.description,
			price: Number(this.price),
			quantity: Number(this.quantity),
		});

		this.name = '';
		this.description = '';
		this.price = '';
		this.quantity = '';
	}
}
