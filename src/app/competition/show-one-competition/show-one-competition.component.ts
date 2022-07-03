import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Competition } from 'model/competition';
import { CompetitionsService } from 'src/app/services/competitions.service';

@Component({
  selector: 'app-show-one-competition',
  templateUrl: './show-one-competition.component.html',
  styleUrls: ['./show-one-competition.component.scss']
})
export class ShowOneCompetitionComponent implements OnInit {
  ident!:any;
  oneCompetition!:any;
  constructor(private servcompet:CompetitionsService,private ac:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.ident=this.ac.snapshot.params['id'];
    
    this.servcompet.getCompetitionByID(this.ident).subscribe(
   (data)=>{    
    this.oneCompetition=data;
    
  }
    );

  }
//update competition
    updateCompetition(id:any){

    this.router.navigate(['/updatecompetition/'+id]);
  }
//Delete competition
deleteCompetition(id:any){

  this.servcompet.deleteCompetition(id).subscribe(
()=>{alert('competition Deleted');
this.router.navigate(['/competition/']);
}

  );
}


}
