import { Component } from '@angular/core';
import { OrderService } from 'app/order.service';
import { AuthService } from 'app/auth/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent{
  
  orders$;
  user$;
  userId;

  constructor(private orderService: OrderService, private authService: AuthService, private afs: AngularFirestore) { 
    this.user$ = this.authService.user;
    this.user$.subscribe( user => {
      this.userId = user.uid;
      this.orders$ = orderService.getOrdersForUser(this.userId);
    })
  
  }


}
