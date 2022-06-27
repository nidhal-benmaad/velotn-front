import { Component, OnInit } from '@angular/core';
import {RentalsService} from "../../services/rentals.service";

@Component({
  selector: 'app-rentals-list',
  templateUrl: './rentals-list.component.html',
  styleUrls: ['./rentals-list.component.css']
})
export class RentalsListComponent implements OnInit {

  rentals: any;
  currentRental: any;
  currentIndex = -1;
  title = '';

  constructor(private rentalService: RentalsService) { }

  ngOnInit(): void {
    this.retrieveRentals();
  }

  retrieveRentals(): void {
    this.rentalService.getAll()
      .subscribe(
        data => {
          this.rentals = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  setActiveRental(rental: any, index: any): void {
    this.currentRental = rental;
    this.currentIndex = index;
  }

}
