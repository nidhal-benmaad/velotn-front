import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddCategorieComponent} from "./pages/add-categorie/add-categorie.component";
import { AddMatrialComponent } from './pages/add-matrial/add-matrial.component';
import { ListCategorieComponent } from './pages/list-categorie/list-categorie.component';
import { ListMatrialComponent } from './pages/list-matrial/list-matrial.component';
import { UpdateCategorieComponent } from './pages/update-categorie/update-categorie.component';
import { UpdateMatrialComponent } from './pages/update-matrial/update-matrial.component';

const routes: Routes = [
  {path: 'addCategorie', component: AddCategorieComponent },
  {path: 'addMatrial', component: AddMatrialComponent },
  {path:'liste-categorie',component:ListCategorieComponent}, 
  {path:'update-categorie/:id',component:UpdateCategorieComponent}, 
  {path:'liste-matrial',component:ListMatrialComponent}, 
  {path:'update-matrial/:id',component:UpdateMatrialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
