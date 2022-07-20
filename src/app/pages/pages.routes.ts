import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { AddMatrialComponent } from './add-matrial/add-matrial.component';
import { CartComponent } from './cart/cart.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { ListMatrialComponent } from './list-matrial/list-matrial.component';
import { ListProductComponent } from './list-product/list-product.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { UpdateMatrialComponent } from './update-matrial/update-matrial.component';
 
 
const pagesRoutes: Routes = [
    {path: 'addCategorie', component: AddCategorieComponent },
    {path: 'addMatrial', component: AddMatrialComponent },
    {path:'liste-categorie',component:ListCategorieComponent}, 
    {path:'update-categorie/:id',component:UpdateCategorieComponent}, 
    {path:'liste-matrial',component:ListMatrialComponent}, 
    {path:'update-matrial/:id',component:UpdateMatrialComponent}, 
    {
      path:'cart',component:CartComponent
    }, 
    {
      path:'liste-produits',component:ListProductComponent
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
export class PagesRouterModule {}