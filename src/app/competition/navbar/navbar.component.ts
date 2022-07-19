import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionsService } from 'src/app/services/competitions.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
