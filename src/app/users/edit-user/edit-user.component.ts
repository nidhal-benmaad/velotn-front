import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../userService/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  @Output() updateItemEvent = new EventEmitter();
  @Input() item: any;
  monitor = {
    type: 'text-danger',
    message: '',
    visible: false,
  };
  constructor(private us: UserService) {}

  ngOnInit(): void {}
  editUser(form: any) {
    console.log('form', form);
    this.us.updateUser(this.item._id, form).subscribe(
      (data) => {
        this.monitor = {
          type: 'text-success',
          message: '',
          visible: true,
        };
        this.updateItemEvent.emit(data);
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
