import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import LanguageList from '../list/LanguageList';
@Component({
  selector: 'app-language-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css'
})
export class LanguageListComponent {
  languages: LanguageList[] = [];

	language: string = '';
	description: string = '';
	origin: string = '';

	addLanguage(): void {
		this.languages.push({
			langugae: this.language,
			description: this.description,
			origin: this.origin,
		});

		this.language = '';
		this.description = '';
		this.origin = '';
	}
}
