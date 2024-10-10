import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import ExerciseList from '../list/ExerciseList';
import { ExerciseListService } from '../services/exercise-list/exercise-list.service';
@Component({
  selector: 'app-exercise-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent {
  exercises = [] as ExerciseList[];
  constructor(private exerciseService: ExerciseListService){
	this.exercises = this.exerciseService.getExercises();
  }
	name: string = '';
	sets: number = 0;
	reps: number = 0;
	weight: number = 0;

	addExercise() {
		this.exerciseService.addExercise(
			this.name,
			this.sets,
			this.reps,
			this.weight,
		);

		this.name = '';
		this.sets = 0;
		this.reps = 0;
		this.weight = 0;
	}
}
