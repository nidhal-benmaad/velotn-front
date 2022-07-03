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

getAllCatgorie(){
return this.http.get(`${this.API_URI}/allCategorie`);
}
getSingleCategorie(id:any){
return this.http.get(`${this.API_URI}/singleCategorie/`+id);

}
deleteCategorie(id:any){
return this.http.delete(`${this.API_URI}/deleteCategorie/`+id);

}
updateCategorie(id:any,resource:any){
return this.http.put(`${this.API_URI}/updateCategorie/`+id,resource);

}
  
  
}
