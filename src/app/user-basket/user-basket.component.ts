import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'app/models/product';
import { UserBasketService } from 'app/user-basket/user-basket.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartItem } from 'app/models/shopping-cart-item';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ShoppingCart } from 'app/models/shopping-cart';

@Component({
  selector: 'app-user-basket',
  templateUrl: './user-basket.component.html',
  styleUrls: ['./user-basket.component.css']
})
export class UserBasketComponent implements OnInit {

  items$: Observable<ShoppingCartItem[]>;

  constructor(private afs: AngularFirestore,
              private userBasketService: UserBasketService) {
   }

   cart$;
   shoppingCartItemCount: Observable<any>;
   itemsInCart;
   
  async ngOnInit() {
    this.cart$ = await this.userBasketService.getCart();
  }
  
}
