import { Product } from "app/models/product";

export class ShoppingCartItem {

    id?: string;
    title: string;
    price: number;
    category: string;
    imageUrl: string;
    
    constructor(public product: Product, public quantity: number ){}
    
    get totalPrice(){
        return this.product.price * this.quantity;
    }
}