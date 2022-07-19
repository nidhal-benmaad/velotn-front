import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriescompetitionService } from 'src/app/services/categoriescompetition.service';
import { CompetitionsService } from 'src/app/services/competitions.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {
id:any;
cat:any;

//listcategories:any=[];
  constructor(private servcompet:CompetitionsService,private servcateg:CategoriescompetitionService,private router:Router) { }
  listcompetition:any;
  categories:any;
 
  ngOnInit(): void {
 

  }

  afficherlistecompetitions(){
    this.servcompet.showcompetitions().subscribe(
      (data)=>{this.listcompetition=data
        console.log(data)
      }
     );

  }


  searchPlace(f:any){
   console.log(f.value.searchplace)
    this.router.navigate(['/searchplace/place1/'+f.value.searchplace])
    
    }


    /*searchCategorie(d:any)
{
  console.log(d.value.searchplace)
  this.router.navigate(['/showcategorie/'+d.value.searchcategorie])

}*/

}
