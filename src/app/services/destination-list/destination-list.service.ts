import { Injectable } from '@angular/core';
import DestinationList from '../../list/DestinationList';
@Injectable({
  providedIn: 'root'
})
export class DestinationListService {
  private destinations: DestinationList[] = [];

  constructor() { }
    addDestination(
      name: string,
      time: string,
      location: string,
    ): void {
      this.destinations.push({
        name: name,
        time: time,
        location: location,
      });
    }

    getDestinations(): DestinationList[]{
      return this.destinations;
    }
}
