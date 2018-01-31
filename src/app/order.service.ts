import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Order } from 'app/models/order';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { UserBasketService } from 'app/user-basket/user-basket.service';
import { AuthService } from 'app/auth/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService{

  constructor(private afs: AngularFirestore,
              private cartService: UserBasketService) { 
               
              }

  async placeOrder(order: Order){
    //firestore won't let you add an instance of object of type Order to the add method
    // just a simple object, so here we transform that and then pass it to the add fn
    let orderObj = JSON.parse(JSON.stringify(order));
    let result = await this.afs.collection('orders').add(orderObj);
    this.cartService.clearCart();
    return result;
  }

  getOrders(){
    return this.afs.collection('orders').valueChanges();
  }

  getOrdersForUser(userId: string){
    let ref = this.afs.collection('orders', ref => {
      return ref.where("userId", "==", userId);
    });
    return ref.valueChanges();
  }

}
