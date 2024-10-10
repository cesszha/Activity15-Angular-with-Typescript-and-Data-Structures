import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import ClassroomList from '../list/ClassroomList';
import { ClassroomListService } from '../services/classroom-list/classroom-list.service';
@Component({
  selector: 'app-classroom-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.css'
})
export class ClassroomListComponent {
  classroomList = [] as ClassroomList[];
  constructor(private classroomService: ClassroomListService){
		this.classroomList = this.classroomService.getClassrooms();
  }
	section: string = '';
	professor: string = '';
	studentCount: number = 0;

	addNewClassroom() {
		this.classroomService.addClassroom(
		this.section,
		this.professor,
		this.studentCount,
		);
		this.section = '';
		this.professor = '';
		this.studentCount = 0;
	}
}
