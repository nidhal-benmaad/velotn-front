import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddCategorieComponent} from "./pages/add-categorie/add-categorie.component";
import { AddMatrialComponent } from './pages/add-matrial/add-matrial.component';
import { CartComponent } from './pages/cart/cart.component';
import { ListCategorieComponent } from './pages/list-categorie/list-categorie.component';
import { ListMatrialComponent } from './pages/list-matrial/list-matrial.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { UpdateCategorieComponent } from './pages/update-categorie/update-categorie.component';
import { UpdateMatrialComponent } from './pages/update-matrial/update-matrial.component';

const routes: Routes = [
  {
    path: 'Back-office',
    loadChildren: () =>
      import('../app/pages/pages.routes').then(
        (m) => m.PagesRouterModule
      ),
  },
  {
    path: 'Front-office',
    loadChildren: () =>
      import('../app/Front-office/front-routing.module').then((m) => m.FrontRouterModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
