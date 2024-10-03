import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import ComputerHardware from '../list/ComHardwareList';
@Component({
  selector: 'app-computer-hardware-list',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './computer-hardware-list.component.html',
  styleUrl: './computer-hardware-list.component.css'
})
export class ComputerHardwareListComponent {
  computerHardware: ComputerHardware[] = [];

	name: string = '';
	location: string = '';
	type: string = '';
	price: number = 0;

	addComputerHardware() {
		this.computerHardware.push({
			name: this.name,
			location: this.location,
			type: this.type,
			price: this.price,
		});

		this.name = '';
		this.location = '';
		this.type = '';
		this.price = 0;
	}
}
