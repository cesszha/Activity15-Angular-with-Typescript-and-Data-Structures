import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import GameList from '../list/GameList';
import { GameListService } from '../services/game-list/game-list.service';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
  games = [] as GameList [];
  constructor(private gameService: GameListService){
	this.games = this.gameService.getGames();
  }
	
	name: string = '';
	description: string = '';
	platform: string = '';
	game: any;

	addGame(): void {
		this.gameService.addGame(
		
			this.name,
			this.description,
			this.platform,
			this.game,
		);

	
		this.name = '';
		this.description = '';
		this.platform = '';
	}
}
