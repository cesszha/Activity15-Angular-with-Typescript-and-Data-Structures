import { Injectable } from '@angular/core';
import LectureList from '../../list/LectureList';
@Injectable({
  providedIn: 'root'
})
export class LectureListService {
  private lectures: LectureList[] = [];

  constructor() { }

  addLecture(
    lesson: string,
	  duration: number,
	  instructor: string,
  ): void {
    this.lectures.push({
      lesson: lesson,
      duration: duration,
      instructor: instructor,
    });
  }

  getLectures(): LectureList[]{
    return this.lectures;
  }
}
