import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:3000';
@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor(private http: HttpClient) {}

  public uploadImage(image: File) {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post(`${baseUrl}/upload`, formData);
  }
}
