import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import LectureList from '../list/LectureList';
@Component({
  selector: 'app-lecture-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './lecture-list.component.html',
  styleUrl: './lecture-list.component.css'
})
export class LectureListComponent {
  lectureList: LectureList[] = [];

	lesson: string = '';
	duration: number = 0;
	instructor: string = '';

	addLecture() {
		this.lectureList.push({
			lesson: this.lesson,
			duration: this.duration,
			instructor: this.instructor,
		});
		this.lesson = '';
		this.duration = 0;
		this.instructor = '';
	}
}
