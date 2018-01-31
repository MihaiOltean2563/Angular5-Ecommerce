import {Injectable, EventEmitter} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Product } from 'shared/models/product';
import { Subject } from 'rxjs/Subject';
import { UserBasketService } from 'app/shared/services/user-basket.service';
import { AngularFirestore,
    AngularFirestoreDocument,
    AngularFirestoreCollection} from 'angularfire2/firestore';


@Injectable()
export class ProductService {

    constructor(private http: Http,
                private userBasketService: UserBasketService,
                private afs: AngularFirestore){
                }
   
    //Firebase
    create(product){
        console.log("Saved: " + JSON.stringify(product) + "to Firebase DB !");
        return this.afs.collection('products').doc(product.title).set(product)
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }

    getAll(): any{
        return this.afs.collection('products').valueChanges();
    }

    get(productId){
        console.log('productId in Get', productId);
        return this.afs.collection('products').doc(productId).valueChanges();
    }

    update(productId, product){
        return this.afs.collection('products').doc(productId).update(product);
    }

    delete(productId){
        return this.afs.collection('products').doc(productId).delete();
    }
}