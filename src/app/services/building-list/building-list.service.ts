import { Injectable } from '@angular/core';
import BuildingList from '../../list/BuildingList';
@Injectable({
  providedIn: 'root'
})
export class BuildingListService {
  private buildings: BuildingList[] = [];

  constructor() {}

  addBuilding(
    bulding: string,
    address: string,
	  floors: number,
	  rooms: number,
	  occupants: number,

  ): void {
    this.buildings.push({
      bulding: bulding,
      address: address,
      floors: floors,
      rooms: rooms,
      occupants: occupants,
    });
  }
  getBuildings(): BuildingList[]{
    return this.buildings;
  }
}
