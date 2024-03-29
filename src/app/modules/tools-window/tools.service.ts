import { Injectable } from '@angular/core';
import { DiceComponent } from './tools/dice/dice.component';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  public initToolsArray() {
    return [
      DiceComponent
    ]
  }
}
