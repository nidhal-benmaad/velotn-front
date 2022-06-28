import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl = 'http://localhost:3000';
@Injectable({
  providedIn: 'root',
})
export class BikeService {
  constructor(private http: HttpClient) {}
  fetchBikes() {
    return this.http.get(`${baseUrl}/bikes`);
  }
}
