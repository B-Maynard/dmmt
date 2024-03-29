import { Injectable } from '@angular/core';
import { DiceTool } from './dice.interface';
import { DiceComponent } from './dice.component';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  constructor() { }

  public initDiceObj(type: number) {
    let toolObj: DiceTool = {
      toolComponent: DiceComponent,
      type: type
    };

    return toolObj;
  }

  public runRoll(dType: number) {
    switch (dType) {
      case 20:
        return this.getRandomNumber(20);
      case 12:
        return this.getRandomNumber(12);
      case 10:
        return this.getRandomNumber(10);
      case 8:
        return this.getRandomNumber(8);
      case 6:
        return this.getRandomNumber(6);
      case 4:
        return this.getRandomNumber(4);
      default:
        return 0;
    }
  }

  public getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max) + 1;
  }





}
