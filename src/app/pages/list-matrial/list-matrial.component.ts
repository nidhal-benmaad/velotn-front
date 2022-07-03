import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatrialService } from 'src/app/services/matrial.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-list-matrial',
  templateUrl: './list-matrial.component.html',
  styleUrls: ['./list-matrial.component.scss']
})
export class ListMatrialComponent implements OnInit {

  matrials:any=[]
  constructor(private matrialService:MatrialService,private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log("ok bb")
    this.allMatrial()
  }
  allMatrial(){
    this.matrialService.getAllMatrial().subscribe((res:any)=>{
      this.matrials=res.result
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

}
