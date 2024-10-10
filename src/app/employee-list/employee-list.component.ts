import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeList } from '../list/EmployeeList';
import { EmployeeListService } from '../services/employee-list/employee-list.service';
@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './employee-list.component.html',
  
})
export class EmployeeListComponent {
  employees = [] as EmployeeList[];
  constructor(private employeeListService: EmployeeListService){
	this.employees = this.employeeListService.getEmployees();
  }

	id: string = '';
	name: string = '';
	position: string = '';
	age: number = 0;

	addEmployee(): void {
		this.employeeListService.addEmployee(
		this.id,
		this.name,
		this.position,
		this.age,
		);

		this.age = 0;
		this.position = '';
		this.id = '';
		this.name = '';
	}
}
