import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import LanguageList from '../list/LanguageList';
import { LanguageListService } from '../services/language-list/language-list.service';
@Component({
  selector: 'app-language-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css'
})
export class LanguageListComponent {
  languages = [] as LanguageList[];
  constructor(private languageService: LanguageListService){
	this.languages = this.languageService.getLanguages();
  }
	language: string = '';
	description: string = '';
	origin: string = '';

	addLanguage(): void {
		this.languageService.addLanguage(
			this.language,
			this.description,
			this.origin,
		);

		this.language = '';
		this.description = '';
		this.origin = '';
	}
}
