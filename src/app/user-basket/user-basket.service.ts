import {  Injectable, OnInit, EventEmitter } from "@angular/core";
import { Product } from "app/products/product.model";

@Injectable()
export class UserBasketService implements OnInit{

    cartChanged = new EventEmitter<Product[]>();

    constructor(){}

    private products: Product[] = [
        new Product('Iphone 6s','motorola','./assets/img/phones/samsung-gem.0.jpg'),
        new Product('Samsung Galaxy X','motorola','./assets/img/phones/dell-streak-7.0.jpg')
    ];

    ngOnInit(){}

    getCartProducts(){
        return this.products.slice();
    }

    addProductToCart(product: Product){
        console.log(product + " added to cart!");
        this.products.push(product);
        this.cartChanged.emit(this.products.slice());
    }
}