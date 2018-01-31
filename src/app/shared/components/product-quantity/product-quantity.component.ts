import { Component, Input, OnInit } from '@angular/core';
import { UserBasketService } from 'app/shared/services/user-basket.service';
import { Product } from 'shared/models/product';
import { ShoppingCartItem } from 'shared/models/shopping-cart-item';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit, OnDestroy{

  itemQ;
  itemInCart;
  totalEach;
  subscription: Subscription;

  constructor(private cartService: UserBasketService) {}
  
  @Input('product') product: Product;
  
  async ngOnInit(){
    this.itemInCart = await this.cartService.getItem(this.product.title);
    this.subscription = this.itemInCart
    
    .subscribe( item => {
      if(item){
        this.itemQ = item.quantity;
      }else{
        this.itemQ =  0;
      }
    })
  }
  

  addToCart(){
    // console.log("prod from btns comp: +", this.product);
    this.cartService.addToCart(this.product);
  }

  removeFromCart(){
    // console.log("prod from btns comp: -", this.product);

    this.cartService.removeFromCart(this.product);
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
}
