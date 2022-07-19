import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcompetitionComponent } from './competition/addcompetition/addcompetition.component';
import { DeleteCompetitionComponent } from './competition/delete-competition/delete-competition.component';
import { LoginComponent } from './competition/login/login.component';
import { NavbarComponent } from './competition/navbar/navbar.component';
import { SearchplaceComponent } from './competition/searchplace/searchplace.component';
import { ShowOneCompetitionComponent } from './competition/show-one-competition/show-one-competition.component';
import { ShowsearchComponent } from './competition/showsearch/showsearch.component';
import { UpdatecompetitionComponent } from './competition/updatecompetition/updatecompetition.component';
import { AddcategorieComponent } from './competitions/addcategorie/addcategorie.component';
import { CategoriesComponent } from './competitions/categories/categories.component';
import { CompetitionComponent } from './competitions/competition/competition.component';
import { ShowonecategorieComponent } from './competitions/showonecategorie/showonecategorie.component';
import { UpdatecategorieComponent } from './competitions/updatecategorie/updatecategorie.component';

const routes: Routes = [

  
    
    {path:'', redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'navigation',component:NavbarComponent},
    {path:'competition',component:CompetitionComponent},
    {path:'showonecompetition/:id',component:ShowOneCompetitionComponent},
    {path:'addcompetition',component:AddcompetitionComponent},
    {path:'updatecompetition/:id',component:UpdatecompetitionComponent},    
    {path:'deletecompetition/:id',component:DeleteCompetitionComponent},
    {path:'searchplace/place1/:place',component:SearchplaceComponent},
    {path:'showcategorie/:categorie',component:ShowsearchComponent},


  {path:'categories',component:CategoriesComponent},
  {path:'addcategorie',component:AddcategorieComponent},
  {path:'updatecategorie/:id',component:UpdatecategorieComponent},
  {path:'showonecategorie/:id',component:ShowonecategorieComponent},
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
