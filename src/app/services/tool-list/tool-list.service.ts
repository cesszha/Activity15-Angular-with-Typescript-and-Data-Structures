import { Injectable } from '@angular/core';
import ToolList from '../../list/ToolList';
@Injectable({
  providedIn: 'root'
})
export class ToolListService {
private tools: ToolList[] = [];

  constructor() { }

  addTool(
    name: string, 
	  description: string, 
	  price: number, 
	  quantity: number, 
  ): void {
    this.tools.push({
      name: name,
      description: description,
      price: price,
      quantity: quantity,
    });
  }

  getTools(): ToolList[]{
    return this.tools;
  }
}

