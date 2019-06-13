import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from '../models/beer.model';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})

export class BeerListComponent {

  @Input() childBeerList: Beer[];
  @Output() clickSender = new EventEmitter();
  @Output() clickSender2 = new EventEmitter();

  editButtonClicked(beerToEdit: Beer) {
    this.clickSender.emit(beerToEdit);
  }

  pourButtonClicked(beerToPour: Beer) {
    this.clickSender2.emit(beerToPour);
  }

  abvColor(currentBeer){
    if (currentBeer.abv > 7) {
      return  "bg-danger";
    } else if (currentBeer.abv > 5){
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

  filterByLevels: string = "lowLevelBeers";

  onChange(optionFromMenu) {
    this.filterByLevels = optionFromMenu;
  }

  toggleDone(clickedBeer: Beer, setLevels: boolean) {
    if (clickedBeer.pintsRemaining <= 10) {
      setLevels === true;
    } if (clickedBeer.pintsRemaining === 0) {
      clickedBeer.pintsRemaining = null;
    }
  }
}
