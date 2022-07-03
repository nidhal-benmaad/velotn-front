import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompetitionsService } from 'src/app/services/competitions.service';

@Component({
  selector: 'app-delete-competition',
  templateUrl: './delete-competition.component.html',
  styleUrls: ['./delete-competition.component.scss']
})
export class DeleteCompetitionComponent implements OnInit {
  id!:any;
  constructor(private servcompet:CompetitionsService,private ar:ActivatedRoute,private r:Router) { }

  ngOnInit(): void {
    

  }

}
