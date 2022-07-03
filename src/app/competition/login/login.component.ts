import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  verifData(t:any){
    let em= t.email;
    let pass=t.password; 
 
    if(em=='admin@esprit.tn' && pass=='gladiator'){
      this.router.navigate(['navigation']);
    }
   }

}
