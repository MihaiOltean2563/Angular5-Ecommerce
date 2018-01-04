import {  Injectable, OnInit, EventEmitter } from "@angular/core";
import { Product } from "app/models/product";
import { AngularFireDatabase } from "angularfire2/database";
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { AngularFireObject } from "angularfire2/database";

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
        let cartId = localStorage.getItem('cardId');
        if(cartId) return cartId;
        let result = await this.create();
        localStorage.setItem('cardId', result.key);
        return result.key;
    }

    async getCart(){
        let cartId = await this.getOrCreateCartId();
        return this.db.object('/shopping-carts/' + cartId);
    }

    private getItem(cartId: string, productId: string){
        return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
    }

    async addToCart(product: Product){
        let cartId = await this.getOrCreateCartId();
        
        let item$ = this.getItem(cartId, product.$key);
        
        item$.snapshotChanges()
             .take(1)
             .subscribe(item => {
                 if(item.payload.exists()){
                     item$.update({ quantity: item.payload.val().quantity + 1})
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