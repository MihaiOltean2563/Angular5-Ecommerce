import {  Injectable, OnInit, EventEmitter } from "@angular/core";
import { Product } from "app/models/product";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

import { AngularFireObject } from "angularfire2/database";
import { ShoppingCart } from "app/models/shopping-cart";

@Injectable()
export class UserBasketService implements OnInit{

    constructor(private db: AngularFireDatabase){}

    ngOnInit(){}

    private create(){
        return this.db.list('/shopping-carts').push({
            dataCreated: new Date().getTime()
        });
    }

    private async getOrCreateCartId(): Promise<string>{
        let cartId = localStorage.getItem('cartId');
        if(cartId) return cartId;
        let result = await this.create();
        localStorage.setItem('cartId', result.key);
        return result.key;
    }

    async getCart(): Promise<Observable<ShoppingCart>>{
        let cartId = await this.getOrCreateCartId();
        return this.db.object('/shopping-carts/' + cartId)
            .valueChanges()
            .map(x => new ShoppingCart(x.items))
    }

    private getItem(cartId: string, productId: string){
        return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
    }

    async addToCart(product: Product){
       this.updateItemQuantity(product, 1);
    }

    async removeFromCart(product: Product){
        this.updateItemQuantity(product, -1);
    }

    private async updateItemQuantity(product: Product, change: number){
        let cartId = await this.getOrCreateCartId();
        
        let item$ = this.getItem(cartId, product.$key);
        
        item$.snapshotChanges()
             .take(1)
             .subscribe(item => {
                 if(item.payload.exists()){
                     item$.update({ quantity: item.payload.val().quantity + change})
                 }else{
                     item$.update({
                         product: {
                            title: product.title,
                            price: product.price,
                            category: product.category,
                            imageUrl: product.imageUrl,
                          },
                         quantity: 1
                     })
                 }
             });
    }

}