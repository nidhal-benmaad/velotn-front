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
import { PagesRouterModule } from './pages.routes';

import { CoreModule } from '../core/core.module';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { AddMatrialComponent } from './add-matrial/add-matrial.component';
import { CartComponent } from './cart/cart.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { ListMatrialComponent } from './list-matrial/list-matrial.component';
import { ListProductComponent } from './list-product/list-product.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { UpdateMatrialComponent } from './update-matrial/update-matrial.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: 
    [        CommonModule,

        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        ToastrModule.forRoot(), // ToastrModule added
        MatCardModule,
        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatCheckboxModule,
        MatListModule,
        MatChipsModule,
       
        PagesRouterModule],
    declarations: [
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
    exports: [

    ],
    providers: [
    ]
})
export class PagesModule {
}
