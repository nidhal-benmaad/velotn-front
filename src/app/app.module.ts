import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './users/index/index.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookingIndexComponent } from './rentals/booking-index/booking-index.component';
import { AddBookingComponent } from './rentals/add-booking/add-booking.component';
import { EditBookingComponent } from './rentals/edit-booking/edit-booking.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ProfileImageComponent } from './components/profile-image/profile-image.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NotFoundComponent,
    AddUserComponent,
    EditUserComponent,
    LoginComponent,
    RegisterComponent,
    BookingIndexComponent,
    AddBookingComponent,
    EditBookingComponent,
    ProfileComponent,
    NavComponent,
    HomeComponent,
    FileUploadComponent,
    ProfileImageComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ImageCropperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
