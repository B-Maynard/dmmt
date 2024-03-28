import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolsComponent } from './modules/tools/tools.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ToolsComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-dmmt';
}
