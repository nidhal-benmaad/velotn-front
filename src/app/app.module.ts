import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CategorieService} from "./services/categorie.service";
import { AddCategorieComponent } from './pages/add-categorie/add-categorie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";
import { AddMatrialComponent } from './pages/add-matrial/add-matrial.component';
import { ListMatrialComponent } from './pages/list-matrial/list-matrial.component';
import { ListCategorieComponent } from './pages/list-categorie/list-categorie.component';
import { UpdateCategorieComponent } from './pages/update-categorie/update-categorie.component';
import { UpdateMatrialComponent } from './pages/update-matrial/update-matrial.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCategorieComponent,
    AddMatrialComponent,
    ListMatrialComponent,
    ListCategorieComponent,
    UpdateCategorieComponent,
    UpdateMatrialComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [CategorieService],
  bootstrap: [AppComponent]


})
export class AppModule { }
