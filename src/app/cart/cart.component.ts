import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Cart } from '../interfaces/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cart!: Array<Cart>;
  counter: Number = 1;
  totalPrice: number = 0;
 
  constructor(private router: Router,private cartService: CartService){};

  ngOnInit(){
    this.cartService.getItems().subscribe((data:any)=> this.cart=data)
    this.cartService.getItems().subscribe((data:Array<any>)=> this.cartService.setCounter(data.length));
    this.cartService.getCounter().subscribe((data:Number)=> this.counter =data);
   /*
    this.cart.forEach(item=>{
     //this.totalPrice +=item.item.price-((item.item.price)*((item.item.discountPercentage)/100));
     this.totalPrice +=item.item.price;
    })
    */
  }

  incrementQuantity(product: any) {

    this.cartService.incrementQuantity(product);
  }

  decrementQuantity(product: any) {
  
    this.cartService.decrementQuantity(product);
  }

  getQuantity(product: any): number {
    return this.cartService.getQuantity(product);
  }

  removeFromCart(product:any){
    this.cart.splice(this.cart.findIndex((val)=> val.item==product),1);
  }

  redirectToDetails(id:any){
    this.router.navigate(['product-details',id]);
  }
/*
  calculateTotalPrice(): number {
    return this.cart.reduce((totalPrice, item) => totalPrice + item.price * this.getQuantity(item), 0);
  }
*/


}
