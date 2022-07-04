import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategorieService } from 'src/app/services/categorie.service';
import { MatrialService } from 'src/app/services/matrial.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-list-matrial',
  templateUrl: './list-matrial.component.html',
  styleUrls: ['./list-matrial.component.scss']
})
export class ListMatrialComponent implements OnInit {
  public sortings = [{ id: 1, txt: 'Le moins cher' }, { id: -1, txt: 'Le plus cher' }, { id: 'stock', txt: 'En stock' }, { id: 'AZ', txt: 'Nom A à Z' }, { id: 'ZA', txt: 'Nom Z à A' }];

  categories: any = []
  filterForm: FormGroup;
  matrials:any=[]
  constructor( private formBuilder: FormBuilder,private categorieService: CategorieService,private matrialService:MatrialService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.allCategorie()
     this.allMatrial()
     this.filterForm = this.formBuilder.group({
      categorie: ['', Validators.required],
     prixmin: [0, Validators.required],
     prixmax: [0, Validators.required],
     sort: ['', Validators.required],

 
   })
  }
  allMatrial(){
    this.matrialService.getAllMatrial().subscribe((res:any)=>{
      this.matrials=res.result
    })
  }
  
  allCategorie() {
    this.categorieService.getAllCatgorie().subscribe((res: any) => {
      this.categories = res.result
    })
  }
  delete(id:any){
    Swal.fire({
      title: 'Êtes-vous sûr?',
       icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-le !'
    }).then((result) => {
      if (result.isConfirmed) {
    this.matrialService.deleteMatrial(id).subscribe(res=>{
      this.toastr.success('Matrial Supprime avec succe!', 'Notification!');
      this.allMatrial()
    })
      }
    })
  }
  onSubmit(){
    this.matrialService.filter(this.filterForm.value).subscribe((res: any) => {
      this.matrials=res.result
     })
  }
}