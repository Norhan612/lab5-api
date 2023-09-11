import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  
  count:Number = 0;
  constructor(private cartService: CartService){}

  ngOnInit(){
    this.cartService.getItems().subscribe((data:Array<any>)=> this.cartService.setCounter(data.length));
    this.cartService.getCounter().subscribe((data)=> this.count=data);
    
  }

}
