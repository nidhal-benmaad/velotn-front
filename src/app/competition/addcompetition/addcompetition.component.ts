import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionsService } from 'src/app/services/competitions.service';
import {Competition} from 'model/competition';
@Component({
  selector: 'app-addcompetition',
  templateUrl: './addcompetition.component.html',
  styleUrls: ['./addcompetition.component.scss']
})
export class AddcompetitionComponent implements OnInit {
competition!:any;
  constructor(private servcompet:CompetitionsService,private router:Router) { }

  ngOnInit(): void {

this.competition=new Competition();

  }
ajoutercompetition(f:any){
return this.servcompet.addcompetition(this.competition).subscribe(
()=>{
  
  this.router.navigate(['competition']);}
);

}
}
