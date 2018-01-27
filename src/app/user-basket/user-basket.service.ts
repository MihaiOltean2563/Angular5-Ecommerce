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

    constructor(private afs: AngularFirestore){} 

    ngOnInit(){}

    private async create(){
        return this.afs.collection('carts').add({
            dateCreated: new Date().getTime()
        })
    }

    private async getOrCreateCartId(){
        let cartId = localStorage.getItem('cartId');
        if(cartId) return cartId;
        let result = await this.create();
        localStorage.setItem('cartId', result.id);
        return result.id;
    }

    async clearCart(){
        let cartId = await this.getOrCreateCartId();
        const itemsCollectionRef = 
        this.afs.collection('carts').doc(cartId).collection('items').snapshotChanges();
        itemsCollectionRef.subscribe( items => {
            items.forEach(item => {
                return item.payload.doc.ref.delete();
            })
        })
    }

    async getCart():Promise<Observable<ShoppingCart>>{
        let cartId = await this.getOrCreateCartId();

        let items: AngularFirestoreCollection<ShoppingCartItem[]> = 
        this.afs.collection('carts').doc(cartId).collection('items');
        let itemsObservable = items.valueChanges();
        return itemsObservable.map(x => new ShoppingCart(x));
    }
   
     async getItem(productId){
        let cartId = await this.getOrCreateCartId();
        if(!productId){
            productId = 'Apple'; //temporary fix?
        }
        const document: AngularFirestoreDocument<ShoppingCartItem> =
        this.afs.collection('carts').doc(cartId).collection('items').doc(productId)
        const document$: Observable<ShoppingCartItem> = document.valueChanges();
        return document$;
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
        const docRef = this.afs.collection('carts').doc(cartId).collection('items').doc(product.title);

        docRef.ref.get()
        .then(function(doc) {
            if (doc.exists) {

                console.log("Item in cart updated with: ", doc.data());
                docRef.update({ quantity: (doc.data().quantity || 0) + change});
                
            } else {
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
        
        //Remove item from cart if its' quantity is zero
        docRef.ref.onSnapshot(function(doc){
            if(doc.exists && doc.data().quantity === 0){
                docRef.delete().then(function() {
                    console.log("Document successfully deleted!");
                }).catch(function(error) {
                    console.error("Error removing document: ", error);
                });
            }
        })
    }

}