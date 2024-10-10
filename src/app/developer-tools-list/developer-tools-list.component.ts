import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import DeveloperToolsList from '../list/DeveloperToolList';
import { DeveloperToolsListService } from '../services/developer-tools-list/developer-tools-list.service';
@Component({
  selector: 'app-developer-tools-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './developer-tools-list.component.html',
  styleUrl: './developer-tools-list.component.css'
})
export class DeveloperToolsListComponent {
  developerTools = [] as DeveloperToolsList[];
  constructor(private developerToolsService: DeveloperToolsListService){
	this.developerTools = this.developerToolsService.getDeveloperTools();
  }
	toolName: string = '';
	toolDescription: string = '';
	toolPrice: number = 0;

	addDeveloperTool() {
		this.developerToolsService.addDeveloperTool(
		this.toolName,
		this.toolDescription,
		this.toolPrice,
		);

		this.toolName = '';
		this.toolDescription = '';
		this.toolPrice = 0;
	}
}
