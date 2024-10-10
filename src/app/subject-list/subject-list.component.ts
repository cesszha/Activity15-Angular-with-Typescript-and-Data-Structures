import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Subject from '../list/SubjectList';
import { SubjectListService } from '../services/subject-list/subject-list.service';
@Component({
  selector: 'app-subject-list',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {

  subjects = [] as Subject[];
	constructor(private subjectListService: SubjectListService){
		this.subjects = this.subjectListService.getSubjects();
	}
	
	subject: string = '';
	professor: string = '';

	addSubject(): void {
		this.subjectListService.addSubject(
			
		  this.subject,
		  this.professor,
		);

	
		this.subject = '';
		this.professor = '';
	}
}
