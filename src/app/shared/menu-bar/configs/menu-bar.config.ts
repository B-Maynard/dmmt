import { Injectable } from '@angular/core';
import { StateUtilityService } from '../../services/state-utility.service';
import { DiceComponent } from '../../../modules/tools-window/tools/dice/dice.component';
import { ToolsService } from '../../../modules/tools-window/tools.service';
import { DiceTool } from '../../../modules/tools-window/tools/dice/dice.interface';
import { DiceService } from '../../../modules/tools-window/tools/dice/dice.service';

@Injectable({
  providedIn: 'root'
})
export class MenuBarConfigService {

  constructor(
    private toolsService: ToolsService,
    private diceService: DiceService
  ) { }

  public getMenuBarConfig() {
    return {
        defaultConfig: [
            {
                label: "Home",
                icon: "bx bx-home-alt",
                routerLink: '/'
            },
            {
                label: 'Tools',
                icon: 'bx bx-dice-5',
                items: [
                    {
                        label: "Roll dice",
                        icon: "bx bx-dice-5",
                        items: [
                          {
                            label: "d20",
                            command: (event: any) => {
                              this.toolsService.changeSelectedTool(this.diceService.initDiceObj(20));
                            }
                          },
                          {
                            label: "d12",
                            command: (event: any) => {
                              this.toolsService.changeSelectedTool(this.diceService.initDiceObj(12));
                            }
                          },
                          {
                            label: "d10",
                            command: (event: any) => {
                              this.toolsService.changeSelectedTool(this.diceService.initDiceObj(10));
                            }
                          },
                          {
                            label: "d8",
                            command: (event: any) => {
                              this.toolsService.changeSelectedTool(this.diceService.initDiceObj(8));
                            }
                          },
                          {
                            label: "d6",
                            command: (event: any) => {
                              this.toolsService.changeSelectedTool(this.diceService.initDiceObj(6));
                            }
                          },
                          {
                            label: "d4",
                            command: (event: any) => {
                              this.toolsService.changeSelectedTool(this.diceService.initDiceObj(4));
                            }
                          }
                        ],
                    }
                ]
            },
            {
              label: "Score Keeper",
              icon: "bx bx-bar-chart-alt-2",
              items: [
                {
                    label: "Cumulative",
                    icon: "bx bx-pencil",
                },
                {
                  label: "Team-Based",
                  icon: "bx bx-group",
                }
            ]
            },
        ]
    }
  }
}