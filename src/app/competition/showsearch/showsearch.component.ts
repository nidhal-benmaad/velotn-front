import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompetitionsService } from 'src/app/services/competitions.service';

@Component({
  selector: 'app-showsearch',
  templateUrl: './showsearch.component.html',
  styleUrls: ['./showsearch.component.scss']
})
export class ShowsearchComponent implements OnInit {

result:any;
categ:any;

  constructor(private ar:ActivatedRoute,private router:Router,private competserv:CompetitionsService) { }

  ngOnInit(): void {}

   






}
