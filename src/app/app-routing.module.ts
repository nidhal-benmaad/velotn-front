import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RentalsListComponent} from "./components/rentals-list/rentals-list.component";
import {AddRentalComponent} from "./components/add-rental/add-rental.component";
import {RentalsDetailsComponent} from "./components/rental-details/rentals-details.component";

const routes: Routes = [
  { path: '', redirectTo: 'rentals', pathMatch: 'full' },
  { path: 'rentals', component: RentalsListComponent },
  { path: 'rentals/:id', component: RentalsDetailsComponent },
  { path: 'add', component: AddRentalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
