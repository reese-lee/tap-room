import { Component } from '@angular/core';
import { Beer } from './models/tap-room.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentTime = new Date
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  masterBeerList: Beer[] = [
    new Beer('Porter Brewing', 'Irish Red Ale', 5, 5.0, 'slightly sweet with a hint of caramel, lightly hopped and finishes clean and smooth'),
    new Beer('Deschutes 2017', 'The Abyss', 8, 11.5, 'molasses, licorice, cherry bark & vanilla – Barrel Aged'),
    new Beer('Societe', 'The Butcher', 5, 9.6, 'chocolate and tiny hints of raspberry'),
    new Beer('Fieldwork', 'Boot Fruitin Boogie', 5, 7.2, 'Sour Ale w/ Blackberries, Blueberries, Limes, Peaches, Pineapples, Raspberries'),
    new Beer('Fieldwork', 'Rainbow Parfait', 8, 6.4, 'Sour with Raspberries, Oranges, Limes, Vanilla & Lactose'),
    new Beer('Modern Times', 'Black House', 5, 5.8, 'Oatmeal Coffee'),
  ]
}
