import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Competition } from 'model/competition';

@Injectable({
  providedIn: 'root'
})
export class CompetitionsService {
  url='http://localhost:3000/competitions/'
  constructor(private http:HttpClient) { }


// Afficher le contenu de la table competition
  showcompetitions(){
    return this.http.get(this.url);
}

// Ajouter un element dans la table competition
  addcompetition(data:Competition){

    return this.http.post(this.url,data);
}


// Afficher le contenu d'un element de la table competition 

getCompetitionByID(id :any){
  return this.http.get(this.url+id);}

// Modifier un element de la table competition

updatecompetition(id:any,data:any){
 
return this.http.patch(this.url+id,data);
}

// supprimer un element de la table competition

deleteCompetition(id:any) {
  return this.http.delete(this.url+id);}


}