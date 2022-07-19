import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpHeaders, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionComponent } from './competitions/competition/competition.component';
import { CategoriesComponent } from './competitions/categories/categories.component';
import { AddcompetitionComponent } from './competition/addcompetition/addcompetition.component';
import { UpdatecompetitionComponent } from './competition/updatecompetition/updatecompetition.component';
import { ShowOneCompetitionComponent } from './competition/show-one-competition/show-one-competition.component';
import { DeleteCompetitionComponent } from './competition/delete-competition/delete-competition.component';
import { NavbarComponent } from './competition/navbar/navbar.component';
import { AddcategorieComponent } from './competitions/addcategorie/addcategorie.component';
import { UpdatecategorieComponent } from './competitions/updatecategorie/updatecategorie.component';
import { ShowonecategorieComponent } from './competitions/showonecategorie/showonecategorie.component';
import { DeletecategorieComponent } from './competitions/deletecategorie/deletecategorie.component';
import { LoginComponent } from './competition/login/login.component';
import { SearchplaceComponent } from './competition/searchplace/searchplace.component';
import { ShowsearchComponent } from './competition/showsearch/showsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    CategoriesComponent,
    AddcompetitionComponent,
    UpdatecompetitionComponent,
    ShowOneCompetitionComponent,
    DeleteCompetitionComponent,
    NavbarComponent,
    AddcategorieComponent,
    UpdatecategorieComponent,
    ShowonecategorieComponent,
    DeletecategorieComponent,
    LoginComponent,
    SearchplaceComponent,
    ShowsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
