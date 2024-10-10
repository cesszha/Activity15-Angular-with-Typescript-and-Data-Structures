import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import EventList from '../list/EventList';
import { EventListService } from '../services/event-list/event-list.service';
@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  events = [] as EventList[];
  constructor(private eventService: EventListService){
	this.events = this.eventService.getEvents();
  }

	eventDate: string = '';
	eventName: string = '';
	eventLocation: string = '';
	eventPrice: number = 0;
	eventDuration: string = '';

	addEvent() {
		this.eventService.addEvent(
			this.eventDate,
			this.eventName,
			this.eventLocation,
			this.eventPrice,
			this.eventDuration,
		);

		this.eventDate = '';
		this.eventName = '';
		this.eventLocation = '';
		this.eventPrice = 0;
		this.eventDuration = '';
	}
}
