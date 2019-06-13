import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EditBeerComponent } from './edit-beer/edit-beer.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { NewBeerComponent } from './new-beer/new-beer.component';
import { BeerPourComponent } from './beer-pour/beer-pour.component';

@NgModule({
  declarations: [
    AppComponent,
    EditBeerComponent,
    BeerListComponent,
    NewBeerComponent,
    BeerPourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
