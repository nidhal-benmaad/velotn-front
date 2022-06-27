import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookingService } from '../service/booking.service';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss'],
})
export class AddBookingComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter();
  monitor = {
    type: 'text-danger',
    message: '',
    visible: false,
  };
  constructor(private us: BookingService) {}

  ngOnInit(): void {}
  saveBooking(form: any) {
    console.log('form', form);
    this.us.addBooking(form).subscribe(
      (data) => {
        this.monitor = {
          type: 'text-success',
          message: '',
          visible: true,
        };
        this.newItemEvent.emit(data);
      },
      (error) => {
        this.monitor = {
          type: 'text-danger',
          message: 'Erreur',
          visible: true,
        };
      },
      () => {
        setTimeout(() => {
          this.monitor = {
            type: 'text-success',
            message: '',
            visible: false,
          };
        }, 1500);
      }
    );
  }
}
