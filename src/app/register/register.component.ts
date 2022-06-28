import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private auth: AuthService) {}
  monitor = {
    type: 'alert-success',
    message: 'this is test',
    visible: false,
  };
  ngOnInit(): void {}
  register(form: any) {
    this.auth.register(form).subscribe(
      (data) => {
        this.monitor = {
          type: 'alert-success',
          message: 'Ajouté avec succès',
          visible: true,
        };
        setTimeout(() => {
          this.monitor = {
            ...this.monitor,
            visible: false,
          };
        }, 1500);
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
