import { Component, Input } from '@angular/core';
import { UserBasketService } from 'app/user-basket/user-basket.service';
import { Product } from 'app/models/product';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent{

  constructor(private cartService: UserBasketService) { }
  
  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart;

  addToCart(){
    this.cartService.addToCart(this.product);
  }

  removeFromCart(){
    this.cartService.removeFromCart(this.product);
  }
  
  
}
