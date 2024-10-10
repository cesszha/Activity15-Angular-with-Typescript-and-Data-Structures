import { Injectable } from '@angular/core';
import SoftwareList from '../../list/SoftwareList';
@Injectable({
  providedIn: 'root'
})
export class SoftwareListService {
 private software: SoftwareList[] = [];
 
  constructor() { }
 
  addSoftware(
    name: string,
	  description: string,
  	type: any,
  ): void {
    this.software.push({
      name: name,
      description: description,
      type: type,
    });
  }
  getSoftware(): SoftwareList[]{
    return this.software;
  }

}
