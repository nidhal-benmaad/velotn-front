import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {RentalsService} from "../../services/rentals.service";

@Component({
  selector: 'app-rentals-details',
  templateUrl: './rentals-details.component.html',
  styleUrls: ['./rentals-details.component.css']
})
export class RentalsDetailsComponent implements OnInit {
  currentRental: any;
  message = '';

  constructor(
    private rentalsService: RentalsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getRental(this.route.snapshot.paramMap.get('id'));
  }

  getRental(id: any): void {
    this.rentalsService.get(id)
      .subscribe(
        data => {
          this.currentRental = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  updateRental(): void {
    // @ts-ignore
    this.rentalsService.update(this.currentRental.id, this.currentRental)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Rental was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteRental(): void {
    // @ts-ignore
    this.rentalsService.delete(this.currentRental.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/rentals']);
        },
        error => {
          console.log(error);
        });
  }
}
