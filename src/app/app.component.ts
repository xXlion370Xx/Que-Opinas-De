import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { YourfeedComponent } from './domains/shared/yourfeed/yourfeed.component';
import { SidemenuComponent } from './domains/shared/sidemenu/sidemenu.component';
import { HeaderComponent } from './domains/shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, YourfeedComponent, SidemenuComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Que-Opinas-De';
}
