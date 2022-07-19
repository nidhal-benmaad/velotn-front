import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompetitionsService } from 'src/app/services/competitions.service';

@Component({
  selector: 'app-delete-competition',
  templateUrl: './delete-competition.component.html',
  styleUrls: ['./delete-competition.component.scss']
})
export class DeleteCompetitionComponent implements OnInit {
  identif!:any;
  
  constructor(private servcompet:CompetitionsService,private ar:ActivatedRoute,private router:Router) { }
 
  ngOnInit(): void {

    this.identif=this.ar.snapshot.params['id'];
    }


  

//function delete
deleteCompetition()
{ { 
    
  this.servcompet.deleteCompetition(this.identif).subscribe(
    ()=>{alert('competition Deleted');
    this.router.navigate(['competition/']);}
  );}
}
annulerdelete(){

    this.router.navigate(['/competition/']);
  

}
}