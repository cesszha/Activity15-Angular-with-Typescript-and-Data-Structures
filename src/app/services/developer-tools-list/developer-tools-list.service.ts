import { Injectable } from '@angular/core';
import DeveloperToolsList from '../../list/DeveloperToolList';
@Injectable({
  providedIn: 'root'
})
export class DeveloperToolsListService {
    private developerTools: DeveloperToolsList[] = [];

  constructor() { }
    addDeveloperTool(
      toolName: string,
	    toolDescription: string,
	    toolPrice: number,
    ): void {
      this.developerTools.push({
        toolName: toolName,
        toolDescription: toolDescription,
        toolPrice: toolPrice,
      });
    }

    getDeveloperTools(): DeveloperToolsList[]{
      return this.developerTools;
    }

}
