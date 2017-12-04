import {  Injectable, OnInit, EventEmitter } from "@angular/core";
import { Product } from "app/products/product.model";

@Injectable()
export class UserBasketService implements OnInit{

    cartChanged = new EventEmitter<Product[]>();

    constructor(){}

     products: Product[] = [
        new Product('Motorola XOOM\u2122 with Wi-Fi','motorola','./assets/img/phones/motorola-xoom-with-wi-fi.0.jpg'),
        new Product('Iphone 6s','motorola','./assets/img/phones/motorola-xoom-with-wi-fi.0.jpg')
    ]
    ngOnInit(){
      
    }

    getCartProducts(){
        return this.products.slice();
    }
    addProductToCart(product: Product){
        this.products.push(product);
        this.cartChanged.emit(this.products.slice());
    }
    // addProductToCart(products: Product[]){
    //     this.products.push(...products);
    //     this.cartChanged.emit(this.products.slice());
    // }
}