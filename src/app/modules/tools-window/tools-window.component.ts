import { Component, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { MenuBarComponent } from '../../shared/menu-bar/menu-bar.component';
import { StateUtilityService } from '../../shared/services/state-utility.service';
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
export class ToolsWindowComponent implements OnInit, OnChanges {

  @ViewChild('toolsWindow', {read: ViewContainerRef}) toolsWindow: ViewContainerRef | undefined;

  public tools: any[] = this.toolsService.initToolsArray();
  public appState: any;


  constructor(
    private viewRef: ViewContainerRef,
    private stateUtility: StateUtilityService,
    private toolsService: ToolsService
  ) {}


  ngOnInit(): void {
    this.appState = this.stateUtility.getAppState();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
