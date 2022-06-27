import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl = 'http://localhost:3000/booking';
@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private http: HttpClient) {}
  fetchBookings() {
    return this.http.get(`${baseUrl}`);
  }
  addBooking(data: any) {
    return this.http.post(`${baseUrl}`, data);
  }
  updateBooking(id: any, data: any) {
    return this.http.put(`${baseUrl}${id}`, data);
  }
  deleteBooking(id: any) {
    return this.http.delete(`${baseUrl}${id}`);
  }
}
