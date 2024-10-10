import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import ToolList from '../list/ToolList';
import { ToolListService } from '../services/tool-list/tool-list.service';
@Component({
  selector: 'app-tool-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.css'
})
export class ToolListComponent {
  tools = [] as ToolList[];
 constructor (private toolService: ToolListService){
	this.tools = this.toolService.getTools();
 }
	name: string = '';
	description: string = '';
	price: number = 0;
	quantity: number= 0;

	addTool(): void {
		this.toolService.addTool(
			 this.name,
			 this.description,
			 this.price,
			 this.quantity,
		);

		this.name = '';
		this.description = '';
		this.price = 0;
		this.quantity = 0;
	}
}
