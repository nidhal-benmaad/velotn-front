import { Component, OnInit } from '@angular/core';
import { CategoriescompetitionService } from 'src/app/services/categoriescompetition.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private servCateg:CategoriescompetitionService) { }
 listCategories!:any;

  ngOnInit(): void {
   
  this.servCateg.showcategories().subscribe(
(data)=>{
    
  this.listCategories=data}
  );


  }

}
