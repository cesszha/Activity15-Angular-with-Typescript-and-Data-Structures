import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Animals from '../list/AnimalList';
import { AnimalListService } from '../services/animal-list/animal-list.service';
@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent {
  animals: Animals[] = [];
  constructor(private animalService: AnimalListService){
	this.animals = this.animalService.getAnimals();
  }

	petname: string = '';
	origin: string = '';
    breed: any;

	addAnimal(): void {
		this.animals.push({
			petname: this.petname,
			breed: this.breed,
			origin: this.origin,
		});

		this.petname = '';
		this.breed = '';
		this.origin = '';
	}
}
