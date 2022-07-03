import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { animationFrameScheduler } from 'rxjs';
import { CompetitionsService } from 'src/app/services/competitions.service';

@Component({
  selector: 'app-updatecompetition',
  templateUrl: './updatecompetition.component.html',
  styleUrls: ['./updatecompetition.component.scss']
})
export class UpdatecompetitionComponent implements OnInit {
  id!:any;
  oneCompetition!:any;
  constructor(private servcompet:CompetitionsService,private ar:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    
    this.id=this.ar.snapshot.params['id'];
    this.servcompet.getCompetitionByID(this.id).subscribe(
      (data)=>{this.oneCompetition=data; }
       
    ); }

    updatecompetition(data:any){
      return this.servcompet.updatecompetition(this.id,data).subscribe(
        ()=>{
         
          this.router.navigate(['/competition/']);}

      );
      
    }
    annulerupdate()
    { this.router.navigate(['/competition/']);}

}
