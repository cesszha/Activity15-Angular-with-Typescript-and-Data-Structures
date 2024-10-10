import { Injectable } from '@angular/core';
import PaintingList from '../../list/PaintingList';
@Injectable({
  providedIn: 'root'
})
export class PaintingListService {
private paintings: PaintingList[] = [];

  constructor() { }

  addPainting(
    art: string,
	  artist: string,
	  year: number,
	  price: number,

  ): void {
    this.paintings.push({
      art: art,
      artist: artist,
      year: year,
      price: year,
    });
  }

  getPaintings(): PaintingList[]{
    return this.paintings;
  }

}
