import { Injectable } from '@angular/core';
import LanguageList from '../../list/LanguageList';
@Injectable({
  providedIn: 'root'
})
export class LanguageListService {
  private languages: LanguageList[] = [];

  constructor() { }

  addLanguage(
    language: string,
    description: string,
    origin: string,
  ): void {
    this.languages.push({
      language: language,
      description: description,
      origin: origin,
  });
  }

getLanguages(): LanguageList[]{
  return this.languages;
}
}
