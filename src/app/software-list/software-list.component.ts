import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import SoftwareList from '../list/SoftwareList';
import { SoftwareListService } from '../services/software-list/software-list.service';

@Component({
  selector: 'app-software-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './software-list.component.html',
  styleUrl: './software-list.component.css'
})
export class SoftwareListComponent {
  softwareList = [] as SoftwareList[];
  constructor(private softwareListService: SoftwareListService){
	this.softwareList = this.softwareListService.getSoftware();
  }

	name: string = '';
	description: string = '';
	platform: string = '';
	type: any;

	addSoftware(): void {
		this.softwareListService.addSoftware(
		
			 this.name,
			 this.description,
			 this.type,
		);

	
		this.name = '';
		this.description = '';
		this.platform = '';
	}
}
