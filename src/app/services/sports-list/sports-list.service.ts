import { Injectable } from '@angular/core';
import Sports from '../../list/SportsList';
@Injectable({
  providedIn: 'root'
})
export class SportsListService {
private sports: Sports[] = [];

  constructor() { }
  addSports(
    name: string,
	  team: string,
  ): void {
    this.sports.push({
      name: name,
      team: team,
    });
  }

  getSports(): Sports[]{
    return this.sports;
  }
}
