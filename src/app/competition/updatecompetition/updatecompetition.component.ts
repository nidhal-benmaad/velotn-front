import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { animationFrameScheduler } from 'rxjs';
import { CategoriescompetitionService } from 'src/app/services/categoriescompetition.service';
import { CompetitionsService } from 'src/app/services/competitions.service';

@Component({
  selector: 'app-updatecompetition',
  templateUrl: './updatecompetition.component.html',
  styleUrls: ['./updatecompetition.component.scss']
})
export class UpdatecompetitionComponent implements OnInit {
  id!:any;
  oneCompetition!:any;
  listcategories:any=[];
  constructor(private servcompet:CompetitionsService,private servcateg:CategoriescompetitionService,private ar:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getallCategories();
    this.id=this.ar.snapshot.params['id'];
    this.servcompet.getCompetitionByID(this.id).subscribe(
      (data)=>{this.oneCompetition=data;
      //console.log(data)
     }
       
    ); }

    updatecompetition(data:any){
      return this.servcompet.updatecompetition(this.id,data).subscribe(
        ()=>{
         
          this.router.navigate(['/competition/']);}

      );
      
    }
    annulerupdate()
    { this.router.navigate(['/competition/']);}



    getallCategories(){
      this.servcateg.showcategories().subscribe(
      (data)=>{
        console.log(data);
        this.listcategories=data}
      );
      }
}
