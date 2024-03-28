import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import toolsConfig from './tools.config';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss'
})
export class ToolsComponent {

  public toolsConfig = toolsConfig;

  constructor() {}
}
