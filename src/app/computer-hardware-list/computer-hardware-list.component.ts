import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import ComputerHardware from '../list/ComHardwareList';
import { ComputerHardwareListService } from '../services/computer-hardware-list/computer-hardware-list.service';
@Component({
  selector: 'app-computer-hardware-list',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './computer-hardware-list.component.html',
  styleUrl: './computer-hardware-list.component.css'
})
export class ComputerHardwareListComponent {
  computerHardware = [] as ComputerHardware[];
	 
  constructor(
	private computerHardwareListService: ComputerHardwareListService, ){
		this.computerHardware = this.computerHardwareListService.getComputerHardwares();
	}
  
	name: string = '';
	location: string = '';
	type: string = '';
	price: number = 0;

	addComputerHardware() {
		this.computerHardwareListService.addComputerHardware(
		this.name,
		this.location,
		this.type,
		this.price,
		);

		this.name = '';
		this.location = '';
		this.type = '';
		this.price = 0;
	}
}
