import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  API_URI = 'http://localhost:3000/api/categorie';
  constructor(private http: HttpClient) { }

  createCategorie(resource:any){
    return this.http.post(`${this.API_URI}/createCategorie`,resource);
  }

}
