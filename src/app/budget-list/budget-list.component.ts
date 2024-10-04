import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import BudgetList from '../list/BudgetList';
@Component({
  selector: 'app-budget-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css'
})
export class BudgetListComponent {
  budgets: BudgetList[] = [];

	project: string = '';
	budget: number = 0;
	status: string = '';
	startDate: string = '';
	endDate: string = '';

	addBudget() {
		this.budgets.push({
			project: this.project,
			budget: this.budget,
			status: this.status,
			startDate: this.startDate,
			endDate: this.endDate,
		});

		this.project = '';
		this.budget = 0;
		this.status = '';
		this.startDate = '';
		this.endDate = '';
	}
}
