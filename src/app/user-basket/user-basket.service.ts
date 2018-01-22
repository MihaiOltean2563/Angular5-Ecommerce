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

    readonly path = 'items';

    constructor(private db: AngularFireDatabase,
                private afs: AngularFirestore){} 

    ngOnInit(){}

    private async create(){
        return this.afs.collection('carts').add({
            dateCreated: new Date().getTime()
        })
    }

    // private getCart(cartId: string){
    //     console.log("getCart returns: ", this.afs.collection('carts').doc(cartId))
    //     return this.afs.collection('carts').doc(cartId);
    // }

    private async getOrCreateCartId(){
        let cartId = localStorage.getItem('cartId');
        if(cartId) return cartId;
        let result = await this.create();
        localStorage.setItem('cartId', result.id);
        return result.id;
    }
    // getCart method type = Promise<Observable<ShoppingCart>>
    async getCart(){
        let cartId = await this.getOrCreateCartId();
        let cartRef: AngularFirestoreDocument<ShoppingCart> = this.afs.collection('carts').doc(cartId);
        let cartObservable: Observable<ShoppingCart> = cartRef.valueChanges();
        // return cartObservable.map( x => {
        //     let items: AngularFirestoreCollection<ShoppingCartItem[]> = 
        //     this.afs.collection('carts').doc(cartId).collection('items');
        //     let itemsObservable = items.valueChanges();
        //     new ShoppingCart(itemsObservable);
        // })
        // return cartObservable.map( x => new ShoppingCart(x.items));
        let items: AngularFirestoreCollection<ShoppingCartItem[]> = 
        this.afs.collection('carts').doc(cartId).collection('items');
        let itemsObservable = items.valueChanges();
        return itemsObservable.map(x => new ShoppingCart(x))
    }
    // async getCart():Promise<Observable<ShoppingCart>>{
    //     // let cartId = await this.getOrCreateCartId();
    //     // const cart: AngularFireObject<ShoppingCart> = this.db.object('/shopping-carts/' + cartId);
    //     // const cartObservable: Observable<ShoppingCart> = cart.valueChanges();
    //     // return cartObservable.map( (x:any) => {
    //     //     return new ShoppingCart(x.items);
    //     // });
    //     let cartId = await this.getOrCreateCartId();
    //     let cart: AngularFirestoreCollection<any> = this.afs.collection('carts' + cartId);
    //     let cartObservable: Observable<any> = cart.valueChanges();
    //     return cartObservable.map( x => new ShoppingCart(x.items));

    // }

    private async getItem(productId){
        let cartId = await this.getOrCreateCartId();
        const document: AngularFirestoreDocument<ShoppingCartItem> =  this.afs.collection('carts').doc(cartId).collection('items').doc(productId)
        const document$: Observable<ShoppingCartItem> = document.valueChanges();
        return document$;
    }

    async addToCart(product: Product){
        this.updateItem(product, 1);
        
    }

    async removeFromCart(product: Product){
        // this.updateItem(product, -1);
        this.getCart();
    }


    private async updateItem(product: Product, change: number){
        let cartId = await this.getOrCreateCartId();
        let item$ = await this.getItem(product.title);
        const docRef = this.afs.collection('carts').doc(cartId).collection('items').doc(product.title);
        
        docRef.ref.get().then(function(doc) {
            if (doc.exists) {
                console.log("Item in cart updated with: ", doc.data());
                docRef.update({ quantity: (doc.data().quantity || 0) + change})
            } else {
                // doc.data() will be undefined in this case
                console.log("Created item in cart!");
                docRef.set({
                    title: product.title,
                    category: product.category,
                    imageUrl: product.imageUrl,
                    price: product.price,
                    quantity:  0 + change
                })
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });

    }

}