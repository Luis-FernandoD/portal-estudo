import { Component } from '@angular/core';
import { CardsComponent } from './cards/cards.component';

@Component({
  selector: 'app-root',
  imports: [
    CardsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'estudos';
}
