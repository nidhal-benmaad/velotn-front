import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategorieService } from 'src/app/services/categorie.service';
import { MatrialService } from 'src/app/services/matrial.service';


@Component({
  selector: 'app-add-matrial',
  templateUrl: './add-matrial.component.html',
  styleUrls: ['./add-matrial.component.scss']
})
export class AddMatrialComponent implements OnInit {

  matrialForm:FormGroup;
  categories: any = []
  file: any;

  constructor(private matrialService:MatrialService,
    private toastr: ToastrService, private formBuilder: FormBuilder, private categorieService: CategorieService, private router: Router,
  ) { }

  ngOnInit(): void {
    this.allCategorie()
    this.matrialForm = this.formBuilder.group({
       title: ['', Validators.required],
      state: ['', Validators.required],
      code: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      new: ['', Validators.required],
      promo: ['', Validators.required],
      description: ['', Validators.required],
       categories: ['', Validators.required],
    })
  }
  onChange(event: any) {
    this.file = event.target.files[0];
  }
  allCategorie() {
    this.categorieService.getAllCatgorie().subscribe((res: any) => {
      this.categories = res.result
    })
  }
  onSubmit() {

console.log(this.matrialForm.value);
console.log(this.file);
const formData = new FormData(); 
        
// Store form name as "file" with file data
formData.append("image",this.file );
formData.append("title",this.matrialForm.value.title);
formData.append("state",this.matrialForm.value.state );
formData.append("code",this.matrialForm.value.code );
formData.append("price",this.matrialForm.value.price );
formData.append("stock",this.matrialForm.value.stock);
formData.append("promo",this.matrialForm.value.promo);
formData.append("new",this.matrialForm.value.new);

formData.append("description",this.matrialForm.value.description );
formData.append("categories",this.matrialForm.value.categories );


    this.matrialService.createMatrial( formData).subscribe((res: any) => {
      this.toastr.success('Matrial Ajouter avec succes!', 'Notification!');
      this.matrialForm.reset()
      this.router.navigate(['/liste-matrial'])
    })
  }
  


}
