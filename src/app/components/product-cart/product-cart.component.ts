import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interface/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {

  addedToCartProducts: Product[] = [];


  matrials:any=[]
  constructor( private cart: CartService,
    private toastr: ToastrService) { }

  @Input() product :Product;
  ngOnInit(): void {
    console.log(this.product);
    
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
