import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import PresentationList from '../list/Presentation-List';
import { PresentationListService } from '../services/presentation-list/presentation-list.service';
@Component({
  selector: 'app-presentation-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './presentation-list.component.html',
  styleUrl: './presentation-list.component.css'
})
export class PresentationListComponent {
  presentations = [] as PresentationList [];
constructor(private presentationService: PresentationListService){
	this.presentations = this.presentationService.getPresentation();
}
	topic: string = '';
	presenter: string = '';
	date: string = '';
	time: string = '';

	addPresentation() {
		this.presentationService.addPresentation(
			this.topic,
			this.presenter,
			this.date,
			this.time,
		);

		this.topic = '';
		this.presenter = '';
		this.date = '';
		this.time = '';
	}
}
