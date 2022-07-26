import { Component, OnInit } from '@angular/core';
import {RentalsService} from "../../services/rentals.service";

@Component({
  selector: 'app-add-rental',
  templateUrl: './add-rental.component.html',
  styleUrls: ['./add-rental.component.css']
})
export class AddRentalComponent implements OnInit {
  rental = {
    address: '',
    price: '',
    velo: {couleur: '', kind: '', modele: '', marque: ''}
  };
  submitted = false;

  constructor(private rentalService: RentalsService) { }

  ngOnInit(): void {
  }

  saveRental(): void {
    const data = {
      address: this.rental.address,
      price: this.rental.price,
      velo: this.rental.velo
    };

    this.rentalService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newRental(): void {
    this.submitted = false;
    this.rental = {
      address: '',
      price: '',
      velo: {couleur: '', kind: '', modele: '', marque: ''}
    };
  }

}
