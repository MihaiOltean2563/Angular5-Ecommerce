import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Order } from 'app/models/order';

@Injectable()
export class OrderService {

  constructor(private afs: AngularFirestore) { }

  storeOrder(order: Order){
    //firestore won't let you add an instance of object of type Order to the add method
    // just a simple object, so here we transform that and then pass it to the add fn
    let orderObj = JSON.parse(JSON.stringify(order));
    
    return this.afs.collection('orders').add(orderObj)
    .then(function(docRef) {
      console.log("Order saved with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error saving order: ", error);
    });
  }

}
