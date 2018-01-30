import { Component, OnInit } from '@angular/core';
import { UserBasketService } from 'app/user-basket/user-basket.service';
import { ShoppingCart } from 'app/models/shopping-cart';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart$:Observable<ShoppingCart>;

  constructor(public cartService: UserBasketService) { } 

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }
    
}
