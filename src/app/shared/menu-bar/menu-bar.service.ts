import { Injectable } from '@angular/core';
import { MenuBarConfigService } from './configs/menu-bar.config';

@Injectable({
  providedIn: 'root'
})
export class MenuBarService {

  constructor(
    private menuBarConfigService: MenuBarConfigService
  ) { }

  private menuBarConfig = this.menuBarConfigService.getMenuBarConfig();

  public getMenuBarConfig(configToUse: string) {
    let configName = configToUse as keyof typeof this.menuBarConfig;
    return this.menuBarConfig[configName];
  }
}
