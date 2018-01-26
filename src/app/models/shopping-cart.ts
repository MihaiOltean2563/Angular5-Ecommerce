import { ShoppingCartItem } from "app/models/shopping-cart-item";
import { Product } from "app/models/product";

export class ShoppingCart {
    
    items: ShoppingCartItem[] = [];


    constructor(public itemsInCart) {
        
        for(let productId in this.itemsInCart){
            let item = this.itemsInCart[productId];
            this.items.push(new ShoppingCartItem(item, item.quantity))
        }
    }
       

    get totalItemsCount(){
        let count = 0;
        const objArray = [];
        let values:Array<any> = Object.keys(this.itemsInCart)
        .map( key => {
           return this.itemsInCart[key]
        })
        .map( x => objArray.push(x))
        let total = objArray.reduce(function(a, b){
            return a + b.quantity;
        }, 0);
        return total;
    }
    

    get totalPrice(){
        let sum = 0;
        for(let index in this.items){
            sum += this.items[index].totalPrice;
        }
        return sum;
    }


}