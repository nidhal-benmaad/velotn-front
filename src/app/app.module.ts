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
import { ToastrModule } from 'ngx-toastr';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { CartComponent } from './pages/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCategorieComponent,
    AddMatrialComponent,
    ListMatrialComponent,
    ListCategorieComponent,
    UpdateCategorieComponent,
    UpdateMatrialComponent,
    ProductCartComponent,
    ListProductComponent,
    CartComponent
    
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
    ToastrModule.forRoot(), // ToastrModule added


  ],
  providers: [CategorieService],
  bootstrap: [AppComponent]


})
export class AppModule { }
