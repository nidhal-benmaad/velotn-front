import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl = 'http://localhost:3000/users';
const headers = new HttpHeaders();
const user = JSON.parse(localStorage.getItem('user') || '{}');

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  fetchUsers() {
    return this.http.get(`${baseUrl}`, {
      params: {
        deleted: false,
      },
      headers: {
        'x-access-token': user.token || '',
      },
    });
  }
  addUser(data: any) {
    return this.http.post(`${baseUrl}`, data, {
      headers: {
        'x-access-token': user.token || '',
      },
    });
  }
  updateUser(id: any, data: any) {
    console.log('user', user);
    if (user.token) headers.set('x-access-token', user.token);
    return this.http.put(`${baseUrl}/${id}`, data, {
      headers: {
        'x-access-token': user.token || '',
      },
    });
  }
  deleteUser(id: any, data: any) {
    console.log('user', user);
    if (user.token) headers.set('x-access-token', user.token);
    return this.http.put(`${baseUrl}/${id}`, data, {
      headers: {
        'x-access-token': user.token || '',
      },
    });
  }
}
