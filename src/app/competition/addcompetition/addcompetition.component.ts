import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionsService } from 'src/app/services/competitions.service';
import {Competition} from 'model/competition';
import { CategoriescompetitionService } from 'src/app/services/categoriescompetition.service';
@Component({
  selector: 'app-addcompetition',
  templateUrl: './addcompetition.component.html',
  styleUrls: ['./addcompetition.component.scss']
})
export class AddcompetitionComponent implements OnInit {
competition!:any;
listcategories:any=[];
  constructor(private servcompet:CompetitionsService,private router:Router,private servcateg:CategoriescompetitionService) { }

  ngOnInit(): void {
this.getallCategories();
this.competition=new Competition();

  }
  
ajoutercompetition(f:any){
return this.servcompet.addcompetition(this.competition).subscribe(
()=>{
  
  this.router.navigate(['competition']);}
);

}
annuleradd()
{this.router.navigate(['competition']);}


getallCategories(){
this.servcateg.showcategories().subscribe(
(data)=>{
  console.log(data);
  this.listcategories=data}
);
}

}
