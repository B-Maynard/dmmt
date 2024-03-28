import { Component,  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './shared/menu-bar/menu-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MenuBarComponent
  ],
  providers: [
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-dmmt';
}
