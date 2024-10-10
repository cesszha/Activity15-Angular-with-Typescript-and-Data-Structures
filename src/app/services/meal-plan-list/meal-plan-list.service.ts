import { Injectable } from '@angular/core';
import MealPlanList from '../../list/MealPlanList';
@Injectable({
  providedIn: 'root'
})
export class MealPlanListService {
 private mealPlans: MealPlanList[] = [];

  constructor() { }

  addMealPlan(
    name: string,
	  breakfast: string,
  	lunch: string,
  	dinner: string,
	  snacks: string,
  	drinks: string,
  ): void {
    this.mealPlans.push({
      name: name,
      breakfast: breakfast,
      lunch: lunch,
      dinner: dinner,
      snacks: snacks,
      drinks: drinks,
    });
  }

  getMeals(): MealPlanList[]{
    return this.mealPlans;
  }
}
