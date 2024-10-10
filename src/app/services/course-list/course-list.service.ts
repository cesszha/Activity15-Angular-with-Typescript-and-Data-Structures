import { Injectable } from '@angular/core';
import { CourseList } from '../../list/CourseList';
@Injectable({
  providedIn: 'root'
})
export class CourseListService {
    private courses: CourseList[] = [];
  constructor() { }

  addCourse(id: string, name: string, units: number, professor: string): void {
    this.courses.push({
      id: id,
	    name: name,
	    units: units,
      professor: professor,
    });
  }

  getCourses(): CourseList[]{
    return this.courses;
  }
}
