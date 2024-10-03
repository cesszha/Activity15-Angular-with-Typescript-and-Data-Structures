import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Animals from '../list/AnimalList';
@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent {
  animals: Animals[] = [];

	petname: string = '';
	origin: string = '';
breed: any;

	addAnimal(): void {
		this.animals.push({
			petname: this.petname,
			breed: this.breed,
		});

		this.petname = '';
		this.breed = '';
	}
}
