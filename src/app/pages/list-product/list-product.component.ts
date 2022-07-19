import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interface/product';
import { CartService } from 'src/app/services/cart.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { MatrialService } from 'src/app/services/matrial.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  addedToCartProducts: Product[] = [];
  products:any=[]
 constructor( private cart: CartService,
   private formBuilder: FormBuilder,private categorieService: CategorieService,private matrialService:MatrialService,private toastr: ToastrService) { }

 ngOnInit(): void {
     this.allProduct()
    
 }
 allProduct(){
   this.matrialService.getAllMatrial().subscribe((res:any)=>{
     this.products=res.result
   })
 }
 
 
 addToCart(product: Product): void {
   console.log(this.addedToCartProducts.includes(product));
   
   if (this.addedToCartProducts.includes(product)) {
       return;
   }
    this.addedToCartProducts.push(product);
   this.cart.add(product, 1).subscribe({
       complete: () => {
           this.addedToCartProducts = this.addedToCartProducts.filter(eachProduct => eachProduct !== product);
       }
       
   });
   this.toastr.success('Matrial Ajouter au panier avec succe!', 'Notification!');

}
 
}
