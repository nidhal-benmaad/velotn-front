import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './main/components/cart/cart.component';
import { ProductDetailsComponent } from './main/components/product-details/product-details.component';
import { ShopComponent } from './main/shop/shop.component';
 
 
 
const pagesRoutes: Routes = [
    {
        path:'',component:ShopComponent
     },
     {
        path:'product-details/:id',component:ProductDetailsComponent
     },
     {
        path:'cart',component:CartComponent
     }
];

@NgModule({
  imports: [
    RouterModule.forChild(pagesRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class FrontRouterModule {}