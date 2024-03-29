import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MenuBarComponent } from '../../shared/menu-bar/menu-bar.component';
import { ToolsService } from './tools.service';

@Component({
  selector: 'app-tools-window',
  standalone: true,
  imports: [
    MenuBarComponent
  ],
  templateUrl: './tools-window.component.html',
  styleUrl: './tools-window.component.scss'
})
export class ToolsWindowComponent {

  @ViewChild('toolsWindow', {read: ViewContainerRef}) toolsWindow: ViewContainerRef | undefined;


  constructor(
    private toolsService: ToolsService
  ) {
    this.toolsService.selectedToolChange.subscribe((tool: any) => {
      this.toolsWindow?.createComponent(tool?.toolComponent);
    });
  }
}
