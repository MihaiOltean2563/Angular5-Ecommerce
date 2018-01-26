import { Product } from "app/models/product";

export class ShoppingCartItem {

    id?: string;
    title: string;
    price: number;
    category: string;
    imageUrl: string;
    quantity: number;
    
    // constructor(public product: Product, public quantity: number ){}
    
    get totalPrice(){
        return this.price * this.quantity;
    }
}