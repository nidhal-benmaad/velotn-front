import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddCategorieComponent} from "./pages/add-categorie/add-categorie.component";

const routes: Routes = [
  {path: 'addCategorie', component: AddCategorieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
