import {  Injectable, OnInit, EventEmitter } from "@angular/core";
import { Product } from "app/products/product.model";

@Injectable()
export class UserBasketService implements OnInit{

    cartChanged = new EventEmitter<Product[]>();

    constructor(){}

    products: Product[] = [];

    ngOnInit(){}

    getCartProducts(){
        return this.products.slice();
    }

    addProductToCart(products: Product){
        console.log(products);
        this.products.push(products);
        this.cartChanged.emit(this.products.slice());
    }
}