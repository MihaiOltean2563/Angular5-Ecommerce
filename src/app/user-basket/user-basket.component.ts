import { Component, OnInit } from '@angular/core';
import { Product } from 'app/products/product.model';
import { UserBasketService } from 'app/user-basket/user-basket.service';

@Component({
  selector: 'app-user-basket',
  templateUrl: './user-basket.component.html',
  styleUrls: ['./user-basket.component.css']
})
export class UserBasketComponent implements OnInit {

  constructor(private userBasketService: UserBasketService) { }
  
   cart$;
   shoppingCartItemCount: number;
   
  async ngOnInit() {
    this.cart$ = await this.userBasketService.getCart();
    // this.cart$
    // .valueChanges()
    // .subscribe(cart => {
    //   this.shoppingCartItemCount = 0;
    //   for(let productId in cart.items){
    //     this.shoppingCartItemCount += cart.items[productId].quantity;
    //   }
    // })
  }
  
}
