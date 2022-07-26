import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interface/product';
import { CartService } from 'src/app/services/cart.service';
import { MatrialService } from 'src/app/services/matrial.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id:any
product:any
addedToCartProducts: Product[] = [];
products:any=[]
  constructor(private matrialService: MatrialService,
    private router: Router,
    private route: ActivatedRoute,
 private cart: CartService,private toastr: ToastrService){}


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    
    this.matrialService.getSingleMatrial(this.id).subscribe((res:any)=>{
      console.log(res);
      
      this.product=res.result
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
