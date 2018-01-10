import { ShoppingCartItem } from "app/models/shopping-cart-item";

export class ShoppingCart {
    constructor(public items: ShoppingCartItem) {
    }

    
    get totalItemsCount(){
        let count = 0;
        const objArray = [];
        let values:Array<any> = Object.keys(this.items)
        .map( key => this.items[key])
        .map( x => objArray.push(x))

        let total = objArray.reduce(function(a, b){
            return a + b.quantity;
        }, 0);
        return total;
    }

    get productIds(){
        return Object.keys(this.items);
    }
}