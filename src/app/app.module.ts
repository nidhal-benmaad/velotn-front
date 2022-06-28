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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
