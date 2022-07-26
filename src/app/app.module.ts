import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
import {CategorieService} from "./services/categorie.service";
 
import { PagesModule } from './pages/pages.module';
import { CoreModule } from '@angular/flex-layout';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './Back-office/auth/auth.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './Back-office/auth/lazyloader.routes';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './Front-office/main/shop/shop.component';
import { BannerComponent } from './Front-office/main/components/banner/banner.component';
import { ProductDetailsComponent } from './Front-office/main/components/product-details/product-details.component';
import { ServiceComponent } from './Front-office/main/components/service/service.component';
import { ProductComponent } from './Front-office/main/components/product/product.component';
import { FooterComponent } from './Front-office/layout/footer/footer.component';
import { HeaderComponent } from './Front-office/layout/header/header.component';
import { FrontModule } from './Front-office/front.module';
import { AppRoutingModule } from './app-routing.module';


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
    PagesModule,
    FrontModule,
    AppRoutingModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }
