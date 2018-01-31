import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'shared/models/order';
import { AuthService } from 'app/shared/services/auth.service';
import { Router } from '@angular/router';
import { OrderService } from 'app/shared/services/order.service';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy{

  constructor(private orderService: OrderService, private authService: AuthService, private router: Router) { }
  
  shipping = {};
  userId: string;
  userSubscription: Subscription;
  
  @Input('cart') cart: ShoppingCart;

  ngOnInit() {
    this.userSubscription = this.authService.user.subscribe( user => this.userId = user.uid);
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order)
    this.router.navigate(['/order-success/', result.id]);
  }  

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

}
