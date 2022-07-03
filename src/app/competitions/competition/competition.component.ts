import { Component, OnInit } from '@angular/core';
import { CompetitionsService } from 'src/app/services/competitions.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {

  constructor(private servcompet:CompetitionsService) { }
  listcompetition!:any;
  ngOnInit(): void {
 this.servcompet.showcompetitions().subscribe(
  (data)=>{this.listcompetition=data}
 );




  }

}
