import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseList } from '../list/CourseList';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courses: CourseList[] = [];

	id: string = '';
	name: string = '';
	teacher: string = '';
	units: number = 0;
professor: any;

	addCourse(): void {
		this.courses.push({
			id: this.id,
			name: this.name,
			professor: this.professor,
			units: this.units,
		});

		this.id = '';
		this.name = '';
		this.teacher = '';
		this.units = 0;
	}
}
