import { Product } from "shared/models/product";

export class ShoppingCartItem {

    id?: string;
    title: string;
    price: number;
    category: string;
    imageUrl: string;
    quantity: number;
    
    constructor(init?: Partial<ShoppingCartItem>){
        Object.assign(this, init);
    }
    
    get totalPrice(){
        return this.price * this.quantity;
    }
}