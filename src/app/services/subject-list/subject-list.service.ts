import { Injectable } from '@angular/core';
import Subject from '../../list/SubjectList';
@Injectable({
  providedIn: 'root'
})
export class SubjectListService {
private subjects: Subject[] = [];

  constructor() { }

  addSubject(
    subject: string,
	  professor: string,

  ): void {
    this.subjects.push({
      subject: subject,
      professor: professor,
    });
  }

  getSubjects(): Subject[]{
    return this.subjects;
  }
}
