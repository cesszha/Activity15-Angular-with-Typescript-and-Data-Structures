import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeList } from '../list/EmployeeList';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './employee-list.component.html',
  
})
export class EmployeeListComponent {
  employees: EmployeeList[] = [];

	id: string = '';
	name: string = '';
	position: string = '';
	age: number = 0;

	addEmployee(): void {
		this.employees.push({
			id: this.id,
			name: this.name,
			position: this.position,
			age: this.age,
		});

		this.age = 0;
		this.position = '';
		this.id = '';
		this.name = '';
	}
}
