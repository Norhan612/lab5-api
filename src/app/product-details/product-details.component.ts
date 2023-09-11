import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
 
  selected_product_id: number = 0;
  selected_product !: any;
  constructor(private activeRoute: ActivatedRoute, private productsService: ProductsService){

  }
  ngOnInit(){

    this.selected_product_id = this.activeRoute.snapshot.params['id'];
   // this.productsService.getProductDetails(this.selected_product_id).subscribe((data) => console.log(data));

    this.productsService.getProductDetails(this.selected_product_id).subscribe({
      next: (res) => {
        this.selected_product = res;
      },
      error: (err) => console.log(err),
      complete: () => console.log('product returned successfully'),
    });
    

  }

}
