import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import SoftwareList from '../list/SoftwareList';

@Component({
  selector: 'app-software-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './software-list.component.html',
  styleUrl: './software-list.component.css'
})
export class SoftwareListComponent {
  softwareList: SoftwareList[] = [];
	name: string = '';
	description: string = '';
	platform: string = '';
type: any;

	addSoftware(): void {
		this.softwareList.push({
		
			name: this.name,
			description: this.description,
			type: this.type,
		});

	
		this.name = '';
		this.description = '';
		this.platform = '';
	}
}
