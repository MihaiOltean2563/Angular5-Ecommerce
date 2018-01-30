import { Component, OnInit } from '@angular/core';
import { UserBasketService } from 'app/user-basket/user-basket.service';
import { ShoppingCart } from 'app/models/shopping-cart';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { OrderService } from 'app/order.service';
import { AuthService } from 'app/auth/auth.service';
import { Order } from 'app/models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  shipping = {};
  cart: ShoppingCart;
  userId: string;
  cartSubscription: Subscription;
  userSubscription: Subscription;

  constructor(private cartService: UserBasketService,
              private orderService: OrderService,
              private authService: AuthService,
              private router: Router) { }

  async ngOnInit() {
    // console.log(this.shipping);
    let cart$ = await this.cartService.getCart();
    
    this.cartSubscription = cart$.subscribe( cart => this.cart = cart);
    this.userSubscription = this.authService.user.subscribe( user => this.userId = user.uid);
  }

  ngOnDestroy(){
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order)
    this.router.navigate(['/order-success/', result.id]);
    
  }    
}
