import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import LibraryList from '../list/LibraryList';
@Component({
  selector: 'app-library-list',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './library-list.component.html',
  styleUrl: './library-list.component.css'
})
export class LibraryListComponent {
  libraries: LibraryList[] = [];

	libraryName: string = '';
	programmingLanguage: string = '';
	developedBy: string = '';
	firstRelease: string = '';
	latestRelease: string = '';

	addLibrary() {
		this.libraries.push({
			libraryName: this.libraryName,
			programmingLanguage: this.programmingLanguage,
			developedBy: this.developedBy,
			firstRelease: this.firstRelease,
			latestRelease: this.latestRelease,
		});

		this.libraryName = '';
		this.programmingLanguage = '';
		this.developedBy = '';
		this.firstRelease = '';
		this.latestRelease = '';
	}
}
