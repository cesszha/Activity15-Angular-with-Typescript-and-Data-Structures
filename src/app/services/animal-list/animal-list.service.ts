import { Injectable } from '@angular/core';
import Animals from '../../list/AnimalList';
@Injectable({
  providedIn: 'root'
})
export class AnimalListService {
 private animals: Animals[] = [];

  constructor() { }
  addAnimal(petname: string, breed: string, origin: string ){
    this.animals.push({
      breed: breed,
      origin: origin,
      petname: petname,
    });


  }
  getAnimals(): Animals[] {
		return this.animals;
	}
}
