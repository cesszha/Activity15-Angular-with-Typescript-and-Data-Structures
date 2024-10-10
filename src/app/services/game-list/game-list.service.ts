import { Injectable } from '@angular/core';
import GameList from '../../list/GameList';
@Injectable({
  providedIn: 'root'
})
export class GameListService {
  private games: GameList[] = [];

  constructor() { }
 
  addGame(
    name: string,
	  description: string,
	  platform: string,
	  game: any,
  ): void{
    this.games.push({
      name: name,
      description: description,
      platform: platform,
      game: game,
    });

  }
    getGames(): GameList[]{
      return this.games;
    }


}
