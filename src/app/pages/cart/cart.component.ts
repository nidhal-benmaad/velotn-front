import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CartItem } from '../../interface/cart-item';
import { Subject } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart.service';
 
interface Item {
  cartItem: CartItem;
  quantity: number;
  quantityControl: FormControl;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  private destroy$: Subject<void> = new Subject();
  removedItems: CartItem[] = [];
  items: Item[] = [];
  updating = false;
  subtotal:number
  totals:number=0;
  orderInformation: any;
  constructor(
      public cart: CartService,
          ) { }

  ngOnInit(): void {
   
      



      this.cart.items$.pipe(
          takeUntil(this.destroy$),
          map(cartItems => cartItems.map(cartItem => {
              return {
                  cartItem,
                  quantity: cartItem.quantity,
                  quantityControl: new FormControl(cartItem.quantity, Validators.required)
              };
          }))
      ).subscribe(items => this.items = items);
      console.log(this.items);
      
  }

  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
  }

  remove(item: CartItem): void {
      if (this.removedItems.includes(item)) {
          return;
      }

      this.removedItems.push(item);
      this.cart.remove(item).subscribe({complete: () => this.removedItems = this.removedItems.filter(eachItem => eachItem !== item)});
  }

  update(): void {
      this.updating = true;
      this.cart.update(
          this.items
              .filter(item => item.quantityControl.value !== item.quantity)
              .map(item => ({
                  item: item.cartItem,
                  quantity: item.quantityControl.value
              }))
      ).subscribe({complete: () => this.updating = false});
  }

  needUpdate(): boolean {
      let needUpdate = false;

      for (const item of this.items) {
          if (!item.quantityControl.valid) {
              return false;
          }

          if (item.quantityControl.value !== item.quantity) {
              needUpdate = true;
          }
      }

      return needUpdate;
  }
}