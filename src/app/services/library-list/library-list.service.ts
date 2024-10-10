import { Injectable } from '@angular/core';
import LibraryList from '../../list/LibraryList';
@Injectable({
  providedIn: 'root'
})
export class LibraryListService {
  private libraries: LibraryList[] = [];

  constructor() { }

  addLibrary(
    libraryName: string,
	  programmingLanguage: string,
	  developedBy: string,
	  firstRelease: string,
	  latestRelease: string,
  ): void {
    this.libraries.push({
      libraryName: libraryName,
      programmingLanguage: programmingLanguage,
      developedBy: developedBy,
      firstRelease: firstRelease,
      latestRelease: latestRelease,
    });
  }

  getLibraries(): LibraryList[]{
    return this.libraries;
  }
}
