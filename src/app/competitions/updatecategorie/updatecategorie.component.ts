import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriescompetitionService } from 'src/app/services/categoriescompetition.service';

@Component({
  selector: 'app-updatecategorie',
  templateUrl: './updatecategorie.component.html',
  styleUrls: ['./updatecategorie.component.scss']
})
export class UpdatecategorieComponent implements OnInit {
  id!:any;
  oneCategorie!:any;
  constructor(private servCateg:CategoriescompetitionService,private ar:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params['id'];
    this.servCateg.getCategorieByID(this.id).subscribe(
      (data)=>{this.oneCategorie=data; }
       
    ); }

    updatecategorie(data:any){
      return this.servCateg.updatecategorie(this.id,data).subscribe(
        ()=>{
         
          this.router.navigate(['/categories/']);}

      );

    }
    annulerupdate()
    { this.router.navigate(['/categories/']);}












// fin class
  }


