import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import GameList from '../list/GameList';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
  games: GameList[] = [];

	
	name: string = '';
	description: string = '';
	platform: string = '';
game: any;

	addGame(): void {
		this.games.push({
		
			name: this.name,
			description: this.description,
			platform: this.platform,
		});

	
		this.name = '';
		this.description = '';
		this.platform = '';
	}
}
