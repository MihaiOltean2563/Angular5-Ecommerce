import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'app/models/product';
import { UserBasketService } from 'app/user-basket/user-basket.service';
import { Observable } from 'rxjs/Observable';
import { CartService } from 'app/user-basket/cart-service';
import { ShoppingCartItem } from 'app/models/shopping-cart-item';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-user-basket',
  templateUrl: './user-basket.component.html',
  styleUrls: ['./user-basket.component.css']
})
export class UserBasketComponent implements OnInit {

  itemsCollectionRef: AngularFirestoreCollection<ShoppingCartItem>;
  items$: Observable<ShoppingCartItem[]>;

  constructor(private cartService: CartService,
              private afs: AngularFirestore) {
   }

   cart$;
   shoppingCartItemCount: Observable<any>;
   itemsInCart;
   
  async ngOnInit() {
    // this.cart$ = await this.userBasketService.getCart();
<<<<<<< HEAD
=======

>>>>>>> 5404417accf740612683a201866b3382ab486abd
  }
  
}
