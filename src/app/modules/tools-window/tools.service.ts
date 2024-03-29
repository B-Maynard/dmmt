import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  public selectedTool: any | undefined;

  public selectedToolChange: Subject<any> = new Subject<any>();

  constructor() { 
    this.selectedToolChange.subscribe((toolObj) => {
      this.selectedTool = toolObj;
    });
  }


  changeSelectedTool(toolObj: any) {
    this.selectedToolChange.next(toolObj);
  }


}
