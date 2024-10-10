import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import MealPlanList from '../list/MealPlanList';
import { MealPlanListService } from '../services/meal-plan-list/meal-plan-list.service';
@Component({
  selector: 'app-meal-plan-list',
  standalone: true,
  imports: [NgForOf,FormsModule],
  templateUrl: './meal-plan-list.component.html',
  styleUrl: './meal-plan-list.component.css'
})
export class MealPlanListComponent {
  meals = [] as MealPlanList [];
	constructor(private mealPlanService: MealPlanListService){
		this.meals = this.mealPlanService.getMeals();
	}
	name: string = '';
	breakfast: string = '';
	lunch: string = '';
	dinner: string = '';
	snacks: string = '';
	drinks: string = '';

	addMealPlan() {
		this.mealPlanService.addMealPlan(
			this.name,
			this.breakfast,
			this.lunch,
			this.dinner,
			this.snacks,
			this.drinks,
		);

		this.name = '';
		this.breakfast = '';
		this.lunch = '';
		this.dinner = '';
		this.snacks = '';
		this.drinks = '';
	}
}
