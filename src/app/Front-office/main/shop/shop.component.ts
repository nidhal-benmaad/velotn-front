import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategorieService } from 'src/app/services/categorie.service';
import { MatrialService } from 'src/app/services/matrial.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products:any=[]
  public sortings = [{ id: 1, txt: 'Le moins cher' }, { id: -1, txt: 'Le plus cher' }, { id: 'stock', txt: 'En stock' }, { id: 'AZ', txt: 'Nom A à Z' }, { id: 'ZA', txt: 'Nom Z à A' }];
  categories: any = [];
  filterForm: FormGroup;
  constructor( private formBuilder: FormBuilder,private categorieService: CategorieService,
    private matrialService:MatrialService ,private element: ElementRef) { }
 
    ngOnInit(): void {
      this.allCategorie()
      this.matrialService.getAllMatrial().subscribe((res:any)=>{
        this.products=res.result

      })
  
      this.filterForm = this.formBuilder.group({
        categorie: ['', Validators.required],
       prixmin: [0, Validators.required],
       prixmax: [0, Validators.required],
       sort: ['', Validators.required],
  
   
     })
    }
  
    
    allCategorie() {
      this.categorieService.getAllCatgorie().subscribe((res: any) => {
        this.categories = res.result
      })
    }
    onSubmit(){
      this.matrialService.filter(this.filterForm.value).subscribe((res: any) => {
        this.products=res.result
       })
    }
  }
  