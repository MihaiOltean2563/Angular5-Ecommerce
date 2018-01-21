import { Component, Input } from '@angular/core';
import { UserBasketService } from 'app/user-basket/user-basket.service';
import { Product } from 'app/models/product';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent{

  constructor(private cartService: UserBasketService) {
    console.log(this.product);
   }
  
  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart;

  addToCart(){
    console.log("prod from btns comp: +", this.product);
    this.cartService.addToCart(this.product);
  }

  removeFromCart(){
    console.log("prod from btns comp: -", this.product);

    this.cartService.removeFromCart(this.product);
  }
  
  
}
