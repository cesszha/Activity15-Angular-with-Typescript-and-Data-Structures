import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import DeveloperToolsList from '../list/DeveloperToolList';
@Component({
  selector: 'app-developer-tools-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './developer-tools-list.component.html',
  styleUrl: './developer-tools-list.component.css'
})
export class DeveloperToolsListComponent {
  developerTools: DeveloperToolsList[] = [];

	toolName: string = '';
	toolDescription: string = '';
	toolPrice: number = 0;

	addDeveloperTool() {
		this.developerTools.push({
			toolName: this.toolName,
			toolDescription: this.toolDescription,
			toolPrice: this.toolPrice,
		});

		this.toolName = '';
		this.toolDescription = '';
		this.toolPrice = 0;
	}
}
