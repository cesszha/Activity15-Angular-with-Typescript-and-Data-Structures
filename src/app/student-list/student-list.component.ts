import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import StudentList from '../list/StudentList';


@Component({
	selector: 'app-student-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './student-list.component.html',
})
export class StudentListComponent {
	students: StudentList[] = [];
	id: string = '';
	name: string = '';
	grade: string = '';
	age: number = 0;

	addStudent(): void {
		this.students.push({
			id: this.id,
			name: this.name,
			grade: this.grade,
			age: this.age,
		});

		this.age = 0;
		this.grade = '';
		this.id = '';
		this.name = '';
	}
}