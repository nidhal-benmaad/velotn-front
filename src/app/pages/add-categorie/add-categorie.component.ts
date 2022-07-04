import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategorieService} from "../../services/categorie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.scss']
})
export class AddCategorieComponent implements OnInit {

  categorieForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private categorieService:CategorieService,private router:Router,
  ) { }
  ngOnInit(): void {
    this.categorieForm= this.formBuilder.group({
      name: ['', Validators.required],


    })
  }

  onSubmit() {

    console.log(this.categorieForm.value)
    this.categorieService.createCategorie(this.categorieForm.value).subscribe((res: any) => {

      this.categorieForm.reset()
      this.router.navigate(['/liste-categorie'])

    })
  }

}


