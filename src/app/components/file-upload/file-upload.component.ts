import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  base64ToFile,
  ImageCroppedEvent,
  LoadedImage,
} from 'ngx-image-cropper';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {
  @Output() newImageEvent = new EventEmitter();
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor() {}

  ngOnInit(): void {}

  fileChangeEvent(event: any): void {
    console.log('fileChangeEvent ', event);
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    console.log('imageCropped ', event);
    this.croppedImage = base64ToFile(event.base64 || '');
    this.newImageEvent.emit(this.croppedImage);
  }
  imageLoaded(image: LoadedImage) {
    console.log('imageLoaded', image);
    // show cropper
  }
  cropperReady() {
    console.log('cropperReady');
    // cropper ready
  }
  loadImageFailed() {
    console.log('loadImageFailed');
    // show message
  }
}
