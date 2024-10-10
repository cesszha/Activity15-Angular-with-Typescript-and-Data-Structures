import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import StudentList from '../list/StudentList';
import { StudentListService } from '../services/student-list/student-list.service';

@Component({
	selector: 'app-student-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './student-list.component.html',
})
export class StudentListComponent {
	students = [] as StudentList[];
	constructor(private studentListService: StudentListService){
		this.students = studentListService.getStudents();
	}

	id: string = '';
	name: string = '';
	grade: string = '';
	age: number = 0;

	addStudent(): void {
		this.studentListService.addStudent(
			 this.id,
			 this.name,
			 this.grade,
			 this.age,
		);

		this.age = 0;
		this.grade = '';
		this.id = '';
		this.name = '';
	}
}