import { Component, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DiceService } from './dice.service';
import { ToolsService } from '../../tools.service';
import { DiceTool } from './dice.interface';

@Component({
  selector: 'app-dice',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule
  ],
  templateUrl: './dice.component.html',
  styleUrl: './dice.component.scss'
})
export class DiceComponent {

  public visible: boolean = true;
  public dType: number = 0;
  public rollContent: number | undefined;

  constructor (
    public diceService: DiceService,
    private toolsService: ToolsService
  ) {
    this.dType = this.toolsService.selectedTool?.type;
    this.roll();
  }

  public roll() {
    this.rollContent = this.diceService.runRoll(this.dType);
  }

}
