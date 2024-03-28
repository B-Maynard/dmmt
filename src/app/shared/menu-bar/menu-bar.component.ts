import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuBarService } from './menu-bar.service';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [
    MenubarModule
  ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {

  public menuBarItems: any[] | undefined;

  constructor(
    private menuBarService: MenuBarService
  ) {

    this.menuBarItems = this.menuBarService.getMenuBarConfig("defaultConfig");
  }


  onButtonClick() {
    console.log("test");
  }
}
