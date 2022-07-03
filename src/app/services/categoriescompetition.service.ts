import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompetitionCategories } from 'model/competitioncategories';

@Injectable({
  providedIn: 'root'
})
export class CategoriescompetitionService {
  url='http://localhost:3000/competitioncategories/'
  constructor(private http:HttpClient) { }

// Afficher le contenu de la table competitioncategories
showcategories(){
  return this.http.get(this.url);
}
// Ajouter un element dans la table competitioncategories
addcategorie(data:CompetitionCategories){

  return this.http.post(this.url,data);
}

// Afficher le contenu d'un element de la table competitionctegories 

getCategorieByID(id :any){
  return this.http.get(this.url+id);}

// Modifier un element de la table competitionctegories

updatecategorie(id:any,data:any){
 
  return this.http.patch(this.url+id,data);
  }

// supprimer un element de la table competitionctegories

deleteCategorie(id:any) {
  return this.http.delete(this.url+id);}



}




