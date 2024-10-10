import { Injectable } from '@angular/core';
import FrameworkList from '../../list/FrameworkList';
@Injectable({
  providedIn: 'root'
})
export class FrameworkListService {
  private frameworks: FrameworkList[] = [];

  constructor() { }

  addFramework(
    name: string,
	  developedBy: string,
	  firstRelease: string,
	  latestRelease: string,
  ): void {
    this.frameworks.push({
      name: name,
      developedBy: developedBy,
      firstRelease: firstRelease,
      latestRelease: latestRelease,
    });
  }

  getFrameworks(): FrameworkList[]{
    return this.frameworks;
  }
}
