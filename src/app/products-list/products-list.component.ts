import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Cart } from '../interfaces/cart';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  //products: Array<Product>= [];
 products: any;
 cart!: Array<Cart>;
  constructor(private productsService: ProductsService,private cartService: CartService){}

  ngOnInit(){
    //this.productsService.getProductsList().subscribe((data) => this.products=data, (error) => console.log(error));

    this.productsService.getProductsList().subscribe({
      next: (res) => {
        this.products = res.products;
      },
      error: (err) => console.log(err),
      complete: () => console.log('products returned successfully'),
    });

    this.cartService.getItems().subscribe(
      (data) => {this.cart = data}
    )
  }

  addToCart(product:any){
    this.cart.push({item:product,amount:1});
    this.cartService.setItem(this.cart);
  }
  removeFromCart(product:any){
    this.cart.splice(this.cart.findIndex((data)=>data.item==product))
  }
  
}
