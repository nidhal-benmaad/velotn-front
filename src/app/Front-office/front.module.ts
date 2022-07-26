import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
 
import { CoreModule } from '../core/core.module';
 
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { BannerComponent } from './main/components/banner/banner.component';
import { ProductDetailsComponent } from './main/components/product-details/product-details.component';
import { ProductComponent } from './main/components/product/product.component';
import { ServiceComponent } from './main/components/service/service.component';
import { ShopComponent } from './main/shop/shop.component';
import { CartComponent } from './main/components/cart/cart.component';
 

@NgModule({
    declarations:[    ShopComponent,
        BannerComponent,
        ProductDetailsComponent,
        ServiceComponent,
        ProductComponent,
        CartComponent,
        FooterComponent,
        HeaderComponent,],
    imports: 
    [       
         CommonModule,

        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
 
    
       
        
       
         ],
    
    exports: [

    ],
    providers: [
    ]
})
export class FrontModule {
}
