import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  list: any;
  constructor(private us: UserService) {}

  ngOnInit(): void {
    this.us.fetchUsers().subscribe((data) => {
      console.log('fetchUsers >>>', data);
      this.list = data;
    });
  }
  addItem(item: any) {
    this.list.push(item);
  }
  updateItem(item: any) {
    let index = this.list.findIndex((elem: any) => elem._id == item._id);
    if (index !== -1) this.list[index] = item;
  }
  deleteItem(id: any) {
    this.us.deleteUser(id).subscribe(() => {
      let index = this.list.findIndex((item: any) => item._id == id);
      console.log('index', index);
      if (index !== -1) this.list.splice(index, 1);
    });
  }
}
