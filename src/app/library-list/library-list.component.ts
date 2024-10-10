import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import LibraryList from '../list/LibraryList';
import { LibraryListService } from '../services/library-list/library-list.service';
@Component({
  selector: 'app-library-list',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './library-list.component.html',
  styleUrl: './library-list.component.css'
})
export class LibraryListComponent {
  libraries = [] as LibraryList[];
 constructor(private libraryService: LibraryListService){
	this.libraries = this.libraryService.getLibraries();
 }
	libraryName: string = '';
	programmingLanguage: string = '';
	developedBy: string = '';
	firstRelease: string = '';
	latestRelease: string = '';

	addLibrary() {
		this.libraryService.addLibrary(
			 this.libraryName,
			 this.programmingLanguage,
			 this.developedBy,
			 this.firstRelease,
			 this.latestRelease,
		);

		this.libraryName = '';
		this.programmingLanguage = '';
		this.developedBy = '';
		this.firstRelease = '';
		this.latestRelease = '';
	}
}
