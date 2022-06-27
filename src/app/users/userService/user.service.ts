import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl = 'http://localhost:3000/users';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  fetchUsers() {
    return this.http.get(`${baseUrl}`);
  }
  addUser(data: any) {
    return this.http.post(`${baseUrl}`, data);
  }
  updateUser(id: any, data: any) {
    return this.http.put(`${baseUrl}${id}`, data);
  }
  deleteUser(id: any) {
    return this.http.delete(`${baseUrl}${id}`);
  }
}
