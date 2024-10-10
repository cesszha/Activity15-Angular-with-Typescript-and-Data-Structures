import { Injectable } from '@angular/core';
import PresentationList from '../../list/Presentation-List';
@Injectable({
  providedIn: 'root'
})
export class PresentationListService {
private presentations: PresentationList[] = [];

  constructor() { }

  addPresentation(
    topic: string,
	  presenter: string, 
  	date: string, 
	  time: string, 

  ): void {
    this.presentations.push({
      topic: topic,
      presenter: presenter,
      date: date,
      time: time,
    });
  }

  getPresentation(): PresentationList[]{
    return this.presentations;
  }
}
