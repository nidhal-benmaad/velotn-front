import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  monitor = {
    type: 'alert-success',
    message: '',
    visible: false,
  };
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}
  login(form: any) {
    this.auth.login(form).subscribe(
      (data) => {
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['/profile']);
      },
      (errorResponse) => {
        this.monitor = {
          type: 'alert-danger',
          message: errorResponse.error || 'Erreur',
          visible: true,
        };
        setTimeout(() => {
          this.monitor = {
            ...this.monitor,
            visible: false,
          };
        }, 1500);
      }
    );
  }
}
