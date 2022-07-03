import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionCategories } from 'model/competitioncategories';
import { CategoriescompetitionService } from 'src/app/services/categoriescompetition.service';

@Component({
  selector: 'app-addcategorie',
  templateUrl: './addcategorie.component.html',
  styleUrls: ['./addcategorie.component.scss']
})
export class AddcategorieComponent implements OnInit {
 categorie!:any;
  constructor(private  servCateg:CategoriescompetitionService,private router:Router) { }

  ngOnInit(): void {

    this.categorie=new CompetitionCategories(); 
  }
  ajoutercategorie(f:any){
    return this.servCateg.addcategorie(this.categorie).subscribe(
    ()=>{
      
      this.router.navigate(['categories']);}
    );
    
    }

}
