import { Component, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { DiceComponent } from './tools/dice/dice.component';
import { MenuBarComponent } from '../../shared/menu-bar/menu-bar.component';
import { StateUtilityService } from '../../shared/services/state-utility.service';

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

  public currentToolFromState: any = null;
  public appState: any;


  constructor(
    private viewRef: ViewContainerRef,
    private stateUtility: StateUtilityService
  ) {
    this.appState = this.stateUtility.getAppState();
  }


  ngOnInit(): void {
    let appState = this.stateUtility.getAppState();
    this.currentToolFromState = appState?.tool;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    // this.viewRef.clear();
    // this.viewRef.createComponent(DiceComponent);
  }

}
