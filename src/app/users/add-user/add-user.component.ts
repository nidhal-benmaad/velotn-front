import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../userService/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter();
  monitor = {
    type: 'text-danger',
    message: '',
    visible: false,
  };
  constructor(private us: UserService) {}

  ngOnInit(): void {}
  saveUser(form: any) {
    console.log('form', form);
    this.us.addUser(form).subscribe(
      (data) => {
        this.monitor = {
          type: 'text-success',
          message: '',
          visible: true,
        };
        this.newItemEvent.emit(data);
      },
      (error) => {
        this.monitor = {
          type: 'text-danger',
          message: 'Erreur',
          visible: true,
        };
      },
      () => {
        setTimeout(() => {
          this.monitor = {
            type: 'text-success',
            message: '',
            visible: false,
          };
        }, 1500);
      }
    );
  }
}
