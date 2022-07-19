import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompetitionsService } from 'src/app/services/competitions.service';

@Component({
  selector: 'app-searchplace',
  templateUrl: './searchplace.component.html',
  styleUrls: ['./searchplace.component.scss']
})
export class SearchplaceComponent implements OnInit {
result:any;

place:any;
  constructor(private competserv:CompetitionsService,private ar:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    this.place=this.ar.snapshot.params['place'];
    this.competserv.searchplace(this.place).subscribe(
      (data)=>{this.result=data
       
        //console.log(this.result)
      }
      
    );
  console.log(this.place)
  }
  
}
