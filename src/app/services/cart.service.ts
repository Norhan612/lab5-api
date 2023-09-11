import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = new BehaviorSubject<Array<Cart>>([]);
  private counter = new BehaviorSubject<Number>(0);

  constructor() { }

  getItems(){
    return this.cart.asObservable();
  }

  setItem(cart: Array<Cart>){
    
    this.cart.next(cart);
  }

  getCounter(){
    return this.counter.asObservable();
  }

  setCounter(num:Number){
    this.counter.next(num);
  }


  incrementQuantity(product: any) {
    const currentCart = this.cart.value;
    const targetItem = currentCart.find((cartItem) => cartItem.item.id === product.id);

    if (targetItem) {
      targetItem.amount++;
      this.cart.next(currentCart);
    }
  }

  decrementQuantity(product: any) {
    const currentCart = this.cart.value;
    const targetItem = currentCart.find((cartItem) => cartItem.item.id === product.id);

    if (targetItem && targetItem.amount > 1) {
      targetItem.amount--;
      this.cart.next(currentCart);
    }
  }


  getQuantity(product: any): number {
    const targetItem = this.cart.value.find((cartItem) => cartItem.item.id === product.id);
    return targetItem ? targetItem.amount : 0;
  }

  
}
