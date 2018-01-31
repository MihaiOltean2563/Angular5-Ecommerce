import { Component } from '@angular/core';
import { OrderService } from 'app/shared/services/order.service';
import { AuthService } from 'app/shared/services/auth.service';

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
      this.orders$ = orderService.getOrdersForUser(user.uid);
    })
  
  }


}
