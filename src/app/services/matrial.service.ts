import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
  
@Injectable({
  providedIn: 'root'
})
export class MatrialService { 

  API_URI = 'http://localhost:3000/api/matrial';
    constructor(private http: HttpClient) { }
 
    createMatrial(resource:any){
  return this.http.post(`${this.API_URI}/createMatrial`,resource);
} 

getAllMatrial(){
  return this.http.get(`${this.API_URI}/allMatrial`);
}
getSingleMatrial(id:any){
  return this.http.get(`${this.API_URI}/singleMatrial/`+id);

}
deleteMatrial(id:any){
  return this.http.delete(`${this.API_URI}/deleteMatrial/`+id);

}
updateMatrial(id:any,resource:any){
  return this.http.put(`${this.API_URI}/updateMatrial/`+id,resource);

}
   
filter(resource:any){
   
  return this.http.get(`${this.API_URI}/filter/`+resource.categorie+'/'+resource.prixmin+'/'+resource.prixmax+'/'+resource.sort);

}
}
