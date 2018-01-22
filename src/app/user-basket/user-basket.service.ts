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

<<<<<<< HEAD
    private create(){
=======
    private async create(){
>>>>>>> 5404417accf740612683a201866b3382ab486abd
        return this.afs.collection('carts').add({
            dateCreated: new Date().getTime()
        })
    }

    private getCart(cartId: string){
        console.log("getCart returns: ", this.afs.collection('carts').doc(cartId))
        return this.afs.collection('carts').doc(cartId);
    }

    private async getOrCreateCartId(){
        let cartId = localStorage.getItem('cartId');
        if(cartId) return cartId;
        let result = await this.create();
        localStorage.setItem('cartId', result.id);
        return result.id;
    }

    // async getCart():Promise<Observable<ShoppingCart>>{
    //     let cartId = await this.getOrCreateCartId();
    //     let cart: AngularFirestoreCollection<any> = this.afs.collection('shopping-carts' + cartId);
    //     let cartObservable: Observable<any> = cart.valueChanges();
    //     return cartObservable.map( x => new ShoppingCart(x.items));
    // }
<<<<<<< HEAD
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
=======

    private async getItem(productId){
        let cartId = await this.getOrCreateCartId();
        const document: AngularFirestoreDocument<ShoppingCartItem> = 
            this.afs.collection('carts').doc(cartId).collection('items').doc(productId)
        const document$: Observable<ShoppingCartItem> = document.valueChanges();
        console.log("getItem returns: ", document$);
>>>>>>> 5404417accf740612683a201866b3382ab486abd
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
<<<<<<< HEAD
        let itemRef = this.afs.collection('carts').doc(cartId).collection('items').doc(product.title);
        itemRef.ref.get().then(function(doc) {
            if (doc.exists) {
                console.log("Updating:", doc.data());
                itemRef.update({ quantity: (doc.data().quantity || 0) + change})
            } else {
                console.log("Creating...");
                itemRef.set({
                    title: product.title,
                    category: product.category,
                    imageUrl: product.imageUrl,
                    price: product.price,
                    quantity: 1
                });
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
=======
        let item$ = await this.getItem(product.title);

        item$
            .take(1)
            .subscribe(item => {
                console.log("item", item)
                 
                const docRef = this.afs.collection('carts/' + cartId + '/items/').doc(product.title);
                if(item){
                    return this.afs.collection('carts/' + cartId + '/items/')
                    .doc(product.title).update({ quantity: (item.quantity || 0) + change })
                    .then(function(doc) {
                        console.log("doc", doc);
                        console.log("Document successfully updated!");
                    });
                }else{
                    return this.afs.collection('carts/' + cartId + '/items').doc(product.title)
                    .set({
                        title: product.title,
                        price: product.price,
                        category: product.category,
                        imageUrl: product.imageUrl,
                        quantity: (item.quantity || 0 ) + change
                    }).then(function() {
                        console.log("Document successfully written!");
                    })
                    .catch(function(error) {
                        console.error("Error writing document: ", error);
                    });
                }
                
            });
    }



    private async updateProd(product: Product, change: number){
        // let cartId = await this.getOrCreateCartId();
        // let item$ = await this.getItem(product.title);
        // let itemRef = this.afs.collection('shopping-carts').doc(cartId).collection('items').doc(product.title);
        // let itemRef = this.afs.collection('shopping-carts').doc(cartId).collection('items').doc(product.title);
        
        // item$
        // .take(1)
        // .subscribe( item => {
        //     console.log("itemRef:", itemRef);
        //         itemRef.ref.get().then(function(doc) {
                    
        //             if (doc.exists) {
        //                 itemRef.set({ quantity: (item.quantity || 0) + change})
        //             } else {
        //                 let quantity = item.quantity ? item.quantity : 0;
        //                 itemRef.set({
        //                         title: product.title,
        //                         price: product.price,
        //                         category: product.category,
        //                         imageUrl: product.imageUrl,
        //                         // quantity: (item.quantity || 0) + change
        //                         quantity: quantity + change
        //                 })
        //             }
        //         }).catch(function(error) {
        //             console.log("Error getting document:", error);
        //         });

        // })
>>>>>>> 5404417accf740612683a201866b3382ab486abd
    }
}