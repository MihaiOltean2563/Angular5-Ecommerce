import { Component, Input, OnInit } from '@angular/core';
import { UserBasketService } from 'app/user-basket/user-basket.service';
import { Product } from 'app/models/product';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit{

  itemQ;
  itemInCart;

  constructor(private cartService: UserBasketService) {}
  
  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart;

  async ngOnInit(){
    this.itemInCart = await this.cartService.getItem(this.product.title);
    
    let subscription = this.itemInCart
   
    .subscribe( item => {
      if(item){
        this.itemQ = item.quantity;
      }else{
        this.itemQ =  0;
      }
    })
  }
  

  addToCart(){
    console.log("prod from btns comp: +", this.product);
    this.cartService.addToCart(this.product);
  }

  removeFromCart(){
    console.log("prod from btns comp: -", this.product);

    this.cartService.removeFromCart(this.product);
  }
  
  
}
