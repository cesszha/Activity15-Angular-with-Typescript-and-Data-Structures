import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Subject from '../list/SubjectList';
@Component({
  selector: 'app-subject-list',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {
addCarModel() {
throw new Error('Method not implemented.');
}
  subjects: Subject[] = [];

	
	subject: string = '';
	professor: string = '';

	addSubject(): void {
		this.subjects.push({
			
			subject: this.subject,
			professor: this.professor,
		});

	
		this.subject = '';
		this.professor = '';
	}
}
