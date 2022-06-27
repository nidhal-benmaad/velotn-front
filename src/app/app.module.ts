import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RentalsService} from "./services/rentals.service";
import {AddRentalComponent} from "./components/add-tutorial/add-rental.component";
import {RentalsListComponent} from "./components/tutorials-list/rentals-list.component";
import {RentalsDetailsComponent} from "./components/tutorial-details/rentals-details.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AddRentalComponent,
    RentalsListComponent,
    RentalsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RentalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
