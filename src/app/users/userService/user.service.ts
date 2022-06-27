import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  fetchUsers() {
    return this.http.get('http://localhost:3000/users');
  }
  addUser(data: any) {
    return this.http.post('http://localhost:3000/users', data);
  }
  updateUser(id: any, data: any) {
    return this.http.put('http://localhost:3000/users/' + id, data);
  }
  deleteUser(id: any) {
    return this.http.delete('http://localhost:3000/users/' + id);
  }
}
