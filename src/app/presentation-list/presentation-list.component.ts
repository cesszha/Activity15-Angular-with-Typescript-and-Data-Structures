import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import PresentationList from '../list/Presentation-List';
@Component({
  selector: 'app-presentation-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './presentation-list.component.html',
  styleUrl: './presentation-list.component.css'
})
export class PresentationListComponent {
  presentations: PresentationList[] = [];

	topic: string = '';
	presenter: string = '';
	date: string = '';
	time: string = '';

	addPresentation() {
		this.presentations.push({
			topic: this.topic,
			presenter: this.presenter,
			date: this.date,
			time: this.time,
		});

		this.topic = '';
		this.presenter = '';
		this.date = '';
		this.time = '';
	}
}
