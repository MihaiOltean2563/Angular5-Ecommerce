import {  Injectable, OnInit, EventEmitter } from "@angular/core";
import { Product } from "app/models/product";
import { AngularFireDatabase } from "angularfire2/database-deprecated";
import 'rxjs/add/operator/take';

@Injectable()
export class UserBasketService implements OnInit{

    constructor(private db: AngularFireDatabase){}

    ngOnInit(){}

    private create(){
        return this.db.list('/shopping-carts').push({
            dataCreated: new Date().getTime()
        });
    }

    private async getOrCreateCartId(){
        let cartId = localStorage.getItem('cardId');
        if(cartId) return cartId;
        let result = await this.create();
        localStorage.setItem('cardId', result.key);
        return result.key;
    }

    private getCart(cartId: string){
        return this.db.object('/shopping-carts/' + cartId);
    }

    async addToCart(product: Product){
        let cartId = await this.getOrCreateCartId();
        let item$ = this.db.object('/shopping-carts/' + cartId + '/items/' + product.key);
        item$.take(1).subscribe(item => {
            if(item.$exists()) item$.update({quantity: item.quantity + 1});
            else item$.set({product: product, quantity: 1});
        });
    }
}