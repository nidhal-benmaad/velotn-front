import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
import {CategorieService} from "./services/categorie.service";
 
import { PagesModule } from './pages/pages.module';
import { CoreModule } from '@angular/flex-layout';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './auth/lazyloader.routes';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [
    CommonModule ,
        BrowserAnimationsModule,

     RouterModule.forRoot(appRoutes),
    AuthModule,
    CoreModule,
    PagesModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }
