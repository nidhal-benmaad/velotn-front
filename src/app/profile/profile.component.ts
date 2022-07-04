import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';
import { UserService } from '../users/userService/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any;
  croppedImage: any;
  constructor(
    private uploadService: FileUploadService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  getImage(image: any) {
    this.croppedImage = image;
  }
  updateImage(user: any) {
    this.uploadService
      .uploadImage(this.croppedImage)
      .subscribe((response: any) => {
        console.log(response);
        let id = user._id;
        let image = response.image;
        let data = {
          avatar: `http://localhost:3000/images/${image}`,
        };
        this.userService.updateUser(id, data).subscribe((data: any) => {
          localStorage.setItem('user', JSON.stringify(data));
          this.user = data;
        });
      });
  }
}
