import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'app/models/product';
import { UserBasketService } from 'app/user-basket/user-basket.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-basket',
  templateUrl: './user-basket.component.html',
  styleUrls: ['./user-basket.component.css']
})
export class UserBasketComponent implements OnInit {

  constructor(private userBasketService: UserBasketService) { }

   cart$;
   shoppingCartItemCount: Observable<any>;
   itemsInCart;
   
  async ngOnInit() {
    // this.cart$ = await this.userBasketService.getCart();
  }
  
}
