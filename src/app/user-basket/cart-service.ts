import { Component, Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartItem } from 'app/models/shopping-cart-item';

@Injectable()
export class CartService {
    cartId: Promise<string>;

    cartsCollectionRef: AngularFirestoreCollection<any>;  
    carts$: Observable<any>;

    itemsCollectionRef: AngularFirestoreCollection<ShoppingCartItem>;  
    items$: Observable<ShoppingCartItem[]>;

    constructor(private afs: AngularFirestore) {
        this.cartId = this.getOrCreateCartId();
        this.itemsCollectionRef = 
        this.afs.collection('carts/' + this.cartId + '/items');
        this.items$ = this.itemsCollectionRef.valueChanges();
        console.log(this.items$);
    }

    private async create(){
        return this.afs.collection('carts').add({
            dateCreated: new Date().getTime()
        })
    }

    getCartItems(){
        // let itemsCollectionRef = 
        return this.afs.collection('carts/' + this.cartId + '/items')
    }

    addToCart(product, change){
        console.log("itemsCollectionRef: ",this.itemsCollectionRef)
    }
    removeFromCart(product, change){
        console.log("itemsCollectionRef: ",this.itemsCollectionRef)
    }

     async getOrCreateCartId(): Promise<string>{
        let cartId = localStorage.getItem('cartId');
        if(cartId) return cartId;
        let result = await this.create();
        localStorage.setItem('cartId', result.id);
        return result.id;
    }
}