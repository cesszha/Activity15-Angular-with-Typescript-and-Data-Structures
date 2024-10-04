import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import ExerciseList from '../list/ExerciseList';
@Component({
  selector: 'app-exercise-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent {
  exercises: ExerciseList[] = [];
	name: string = '';
	sets: number = 0;
	reps: number = 0;
	weight: number = 0;

	addExercise() {
		this.exercises.push({
			name: this.name,
			sets: this.sets,
			reps: this.reps,
			weight: this.weight,
		});

		this.name = '';
		this.sets = 0;
		this.reps = 0;
		this.weight = 0;
	}
}
