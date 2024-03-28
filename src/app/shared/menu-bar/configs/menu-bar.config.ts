import { Injectable } from '@angular/core';
import { StateUtilityService } from '../../services/state-utility.service';
import { DiceComponent } from '../../../modules/tools-window/tools/dice/dice.component';

@Injectable({
  providedIn: 'root'
})
export class MenuBarConfigService {

  constructor(
    private stateUtility: StateUtilityService
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
                        command: (event: any) => {
                            this.stateUtility.setAppState({tool: DiceComponent});
                        }
                    }
                ]
            }
        ]
    }
  }
}