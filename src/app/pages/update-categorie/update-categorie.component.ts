import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.scss']
})
export class UpdateCategorieComponent implements OnInit {

  categorieForm:FormGroup;
  id: any;
  constructor(private formBuilder:FormBuilder,private route: ActivatedRoute,
    private categorieService:CategorieService,private router:Router,
    private toastr: ToastrService
   ) { }
  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id'); 
    
    
       this.categorieForm= this.formBuilder.group({
      name: ['', Validators.required],
    })
    this.categorieService.getSingleCategorie(this.id).subscribe((res:any)=>{
      this.categorieForm.patchValue({'name':res.result.name})    })
  }
  
  onSubmit() {
    
 
    this.categorieService.updateCategorie(this.id,this.categorieForm.value).subscribe((res: any) => {
  
      this.toastr.success('Categorie Modifie avec succe!', 'Notification!');
      this.categorieForm.reset()
      this.router.navigate(['/liste-categorie'])    })
  }

}
