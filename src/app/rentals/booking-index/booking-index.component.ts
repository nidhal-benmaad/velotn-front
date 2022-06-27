import { Component, OnInit } from '@angular/core';
import { BookingService } from '../service/booking.service';

@Component({
  selector: 'app-booking-index',
  templateUrl: './booking-index.component.html',
  styleUrls: ['./booking-index.component.scss'],
})
export class BookingIndexComponent implements OnInit {
  list: any;
  constructor(private us: BookingService) {}

  ngOnInit(): void {
    this.us.fetchBookings().subscribe((data) => {
      console.log('fetchBooking >>>', data);
      this.list = data;
    });
  }
  addItem(item: any) {
    this.list.push(item);
  }
  updateItem(item: any) {
    let index = this.list.findIndex((elem: any) => elem._id == item._id);
    if (index !== -1) this.list[index] = item;
  }
  deleteItem(id: any) {
    this.us.deleteBooking(id).subscribe(() => {
      let index = this.list.findIndex((item: any) => item._id == id);
      console.log('index', index);
      if (index !== -1) this.list.splice(index, 1);
    });
  }
}
