import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriescompetitionService } from 'src/app/services/categoriescompetition.service';

@Component({
  selector: 'app-showonecategorie',
  templateUrl: './showonecategorie.component.html',
  styleUrls: ['./showonecategorie.component.scss']
})
export class ShowonecategorieComponent implements OnInit {
  ident!:any;
  oneCategorie!:any;
  constructor(private servCateg:CategoriescompetitionService,private ar:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.ident=this.ar.snapshot.params['id'];
    
    this.servCateg.getCategorieByID(this.ident).subscribe(
   (data)=>{    
    this.oneCategorie=data;
    
  }
    );

  }
//update Categorie
updateCategorie(id:any){

  this.router.navigate(['/updatecategorie/'+id]);
}

//Delete Categorie
deleteCategorie(id:any){

  this.servCateg.deleteCategorie(id).subscribe(
()=>{alert('Category Deleted');
this.router.navigate(['/categories/']);
}

  );
}



//fin classe
  }

