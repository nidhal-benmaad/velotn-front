import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookingService } from '../service/booking.service';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.scss'],
})
export class EditBookingComponent implements OnInit {
  @Output() updateItemEvent = new EventEmitter();
  @Input() item: any;
  monitor = {
    type: 'text-danger',
    message: '',
    visible: false,
  };
  constructor(private us: BookingService) {}

  ngOnInit(): void {}
  editBooking(form: any) {
    console.log('form', form);
    this.us.updateBooking(this.item._id, form).subscribe(
      (data) => {
        this.monitor = {
          type: 'text-success',
          message: '',
          visible: true,
        };
        this.updateItemEvent.emit(data);
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
