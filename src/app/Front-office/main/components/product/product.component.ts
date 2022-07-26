import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
 import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interface/product';
import { CartService } from 'src/app/services/cart.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { MatrialService } from 'src/app/services/matrial.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product:any;
  addedToCartProducts: Product[] = [];
products:any=[]
  constructor(private router :Router,private cart: CartService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  to(id:any){
this.router.navigate(['/Front-office/product-details/'+id])
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
 