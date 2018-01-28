import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class OrderService {

  constructor(private afs: AngularFirestore) { }

  storeOrder(order){
    return this.afs.collection('orders').add(order)
    .then(function(docRef) {
      console.log("Order saved with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error saving prder: ", error);
    });
  }//storeorder

}
