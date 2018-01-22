import { Product } from "app/models/product";

export class ShoppingCartItem {

    // constructor(public product: Product, public quantity: number ){}

    // get totalPrice(){
    //     return this.product.price * this.quantity;
    // }
    title: string;
    category: string;
    imageUrl: string;
    price: number;
    quantity: number;
}