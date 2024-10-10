import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import LectureList from '../list/LectureList';
import { LectureListService } from '../services/lecture-list/lecture-list.service';
@Component({
  selector: 'app-lecture-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './lecture-list.component.html',
  styleUrl: './lecture-list.component.css'
})
export class LectureListComponent {
  lectureList = [] as LectureList[];
  constructor(private lectureListService: LectureListService){
	this.lectureList = this.lectureListService.getLectures();
  }

	lesson: string = '';
	duration: number = 0;
	instructor: string = '';

	addLecture() {
		this.lectureListService.addLecture(
			this.lesson,
		    this.duration,
			this.instructor,
		);
		this.lesson = '';
		this.duration = 0;
		this.instructor = '';
	}
}
