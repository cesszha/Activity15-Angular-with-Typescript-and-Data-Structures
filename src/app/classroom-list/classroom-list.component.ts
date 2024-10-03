import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import ClassroomList from '../list/ClassroomList';

@Component({
  selector: 'app-classroom-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.css'
})
export class ClassroomListComponent {
  classroomList: ClassroomList[] = [];

	section: string = '';
	professor: string = '';
	studentCount: number = 0;

	addNewClassroom() {
		this.classroomList.push({
			section: this.section,
			professor: this.professor,
			studentCount: this.studentCount,
		});
		this.section = '';
		this.professor = '';
		this.studentCount = 0;
	}
}
