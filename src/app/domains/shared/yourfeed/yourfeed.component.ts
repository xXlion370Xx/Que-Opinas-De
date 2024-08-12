import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-yourfeed',
  standalone: true,
  imports: [MatCardModule, CardComponent],
  templateUrl: './yourfeed.component.html',
  styleUrl: './yourfeed.component.css'
})
export class YourfeedComponent {

}
