import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl = 'http://localhost:3000';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(`${baseUrl}/login`, data);
  }
  register(data: any) {
    return this.http.post(`${baseUrl}/register`, data);
  }
}
