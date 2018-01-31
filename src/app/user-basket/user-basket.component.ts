import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'shared/models/product';
import { UserBasketService } from 'app/shared/services/user-basket.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartItem } from 'shared/models/shopping-cart-item';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'app-user-basket',
  templateUrl: './user-basket.component.html',
  styleUrls: ['./user-basket.component.css']
})
export class UserBasketComponent implements OnInit {

  items$: Observable<ShoppingCartItem[]>;

  constructor(private afs: AngularFirestore, private userBasketService: UserBasketService) {}

  cart$;

  async ngOnInit() {
    this.cart$ = await this.userBasketService.getCart()
    // this.cart$.subscribe( cart => console.log("cart", cart));
  }
  
  clearCart(){
    this.userBasketService.clearCart();
  }
}
