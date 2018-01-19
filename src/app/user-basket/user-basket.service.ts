import {  Injectable, OnInit, EventEmitter } from "@angular/core";
import { Product } from "app/models/product";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

import { ShoppingCart } from "app/models/shopping-cart";
import { AngularFireObject, AngularFireList } from "angularfire2/database/interfaces";
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { ShoppingCartItem } from "app/models/shopping-cart-item";


@Injectable()
export class UserBasketService implements OnInit{

    constructor(private db: AngularFireDatabase,
                private afs: AngularFirestore){} 

    ngOnInit(){}

    private create(){
        return this.afs.collection('shopping-carts').add({
            dateCreated: new Date().getTime()
        })
    }

    private async getOrCreateCartId(): Promise<string>{
        let cartId = localStorage.getItem('cartId');
        if(cartId) return cartId;
        let result = await this.create();
        localStorage.setItem('cartId', result.id);
        return result.id;
    }

    async getCart():Promise<Observable<ShoppingCart>>{
        // let cartId = await this.getOrCreateCartId();
        // const cart: AngularFireObject<ShoppingCart> = this.db.object('/shopping-carts/' + cartId);
        // const cartObservable: Observable<ShoppingCart> = cart.valueChanges();
        // return cartObservable.map( (x:any) => {
        //     return new ShoppingCart(x.items);
        // });
        let cartId = await this.getOrCreateCartId();
        let cart: AngularFirestoreCollection<any> = this.afs.collection('shopping-carts' + cartId);
        let cartObservable: Observable<any> = cart.valueChanges();
        return cartObservable.map( x => new ShoppingCart(x.items));

    }

    private async getItem(productId){
        let cartId = await this.getOrCreateCartId();
        const document: AngularFirestoreDocument<ShoppingCartItem> = 
            this.afs.collection('shopping-carts').doc(cartId).collection('items').doc(productId)
        const document$: Observable<ShoppingCartItem> = document.valueChanges();
        console.log("returned by getItem: ",document$);
        return document$ || new Observable<ShoppingCartItem>();
    }

    async addToCart(product: Product){
        this.updateItem(product, 1);
    }

    async removeFromCart(product: Product){
        this.updateItem(product, -1);
    }

    private async updateItem(product: Product, change: number){
        let cartId = await this.getOrCreateCartId();
        let item$ = await this.getItem(product.title);
        let itemRef = this.afs.collection('shopping-carts').doc(cartId).collection('items').doc(product.title);
        
        item$
        .take(1)
        .subscribe( item => {
            if(!itemRef.ref.get()){
                console.log('tge')
                // itemRef.update({
                //     title: product.title,
                //     price: product.price,
                //     category: product.category,
                //     imageUrl: product.imageUrl,
                //     quantity:  0 + change
                // })
            } 
            console.log("itemRef:", itemRef);
                itemRef.ref.get().then(function(doc) {
                    
                    if (doc.exists) {
                        itemRef.update({ quantity: (item.quantity || 0) + change})
                    } else {
                        //this still doesn't work
                        // let quantity = item.quantity ? item.quantity : 0;
                        // itemRef.update({
                        //         title: product.title,
                        //         price: product.price,
                        //         category: product.category,
                        //         imageUrl: product.imageUrl,
                        //         // quantity: (item.quantity || 0) + change
                        //         quantity: quantity + change
                        // })
                        console.log("doesnt exist");
                       
                    }
                }).catch(function(error) {
                    console.log("Error getting document:", error);
                });

        })
    }
}