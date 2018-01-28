import { Component, OnInit } from '@angular/core';
import { UserBasketService } from 'app/user-basket/user-basket.service';
import { ShoppingCart } from 'app/models/shopping-cart';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { OrderService } from 'app/order.service';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  shipping = {};
  cart: ShoppingCart;
  cartSubscription: Subscription;
  userId: string;
  userSubscription: Subscription;

  constructor(private cartService: UserBasketService,
              private orderService: OrderService,
              private authService: AuthService) { }

  async ngOnInit() {
    let cart$ = await this.cartService.getCart();

    this.cartSubscription = cart$.subscribe( cart => this.cart = cart);
    this.userSubscription = this.authService.user$.subscribe( user => this.userId = user.uid);
  }

  ngOnDestroy(){
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  placeOrder() {
    // console.log(this.shipping);
    let order = {
      userId: this.userId,
      datePlaced: new Date().getTime(),
      shipping: this.shipping,
      items: this.cart.items.map( i => {
        return {
          product: {
            title: i.title,
            imageUrl: i.imageUrl,
            price: i.price
          },
          quantity: i.quantity,
          totalPrice: i.totalPrice
        }
      })
    }
    this.orderService.storeOrder(order);
  }    
}
