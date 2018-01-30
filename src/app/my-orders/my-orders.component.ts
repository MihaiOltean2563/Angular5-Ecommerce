import { Component } from '@angular/core';
import { OrderService } from 'app/order.service';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent{
  
  orders$;
  user$;

  constructor(private orderService: OrderService, private authService: AuthService) { 
    this.user$ = this.authService.user;
    this.user$.subscribe( user => {
      // console.log(user.uid);
      this.orders$ = this.orderService.getOrdersForUser(user.uid);
      console.log("em", this.orderService.getOrdersForUser(user.uid))
    })  
    // this.orders$ = this.user$.map( user => console.log(this.orderService.getOrdersForUser(user.uid)));
  }


}
