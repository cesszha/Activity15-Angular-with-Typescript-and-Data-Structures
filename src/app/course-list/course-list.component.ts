import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseList } from '../list/CourseList';
import { CourseListService } from '../services/course-list/course-list.service';
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courses = [] as CourseList[];
  constructor(private courseListService: CourseListService){
	this.courses = this.courseListService.getCourses();
  }

	id: string = '';
	name: string = '';
	units: number = 0;
    professor: string = '';

	addCourse(): void {
		this.courseListService.addCourse(
			this.id,
			this.name,
			this.units,
			this.professor,
		);

		this.id = '';
		this.name = '';
		this.units = 0;
		this.professor = '';
	}
}
