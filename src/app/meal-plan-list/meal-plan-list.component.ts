import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import MealPlanList from '../list/MealPlanList';
@Component({
  selector: 'app-meal-plan-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './meal-plan-list.component.html',
  styleUrl: './meal-plan-list.component.css'
})
export class MealPlanListComponent {
  meals: MealPlanList[] = [];

	name: string = '';
	breakfast: string = '';
	lunch: string = '';
	dinner: string = '';
	snacks: string = '';
	drinks: string = '';

	addMealPlan() {
		this.meals.push({
			name: this.name,
			breakfast: this.breakfast,
			lunch: this.lunch,
			dinner: this.dinner,
			snacks: this.snacks,
			drinks: this.drinks,
		});

		this.name = '';
		this.breakfast = '';
		this.lunch = '';
		this.dinner = '';
		this.snacks = '';
		this.drinks = '';
	}
}
