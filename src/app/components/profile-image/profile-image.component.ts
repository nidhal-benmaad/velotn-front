import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { UserService } from 'src/app/users/userService/user.service';
@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss'],
})
export class ProfileImageComponent implements OnInit {
  user: any = {};
  profileModal: any;
  croppedImage: any;
  monitor = {
    type: 'alert-success',
    message: '',
    visible: false,
  };
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
  updateImage() {
    this.uploadService
      .uploadImage(this.croppedImage)
      .subscribe((response: any) => {
        console.log(response);
        let id = this.user._id;
        let image = response.image;
        let data = {
          avatar: `http://localhost:3000/images/${image}`,
        };
        this.userService.updateUser(id, data).subscribe(
          (data: any) => {
            localStorage.setItem('user', JSON.stringify(data));
            this.user = data;
            this.monitor = {
              type: 'alert-success',
              message: 'Modifié avec succès',
              visible: true,
            };
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
      });
  }
}
