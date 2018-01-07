import { ShoppingCartItem } from "app/models/shopping-cart-item";

export class ShoppingCart {
    constructor(public items: ShoppingCartItem) {
        console.log("items in cart model: ", this.items);
        console.log(this.totalItemsCount);
    }
    get totalItemsCount(){
        let count = 0;
        console.log("items in method: " , this.items);

        for(let productId in this.items){
          count += this.items[productId].quantity;
          console.log('last count: ', count);
          return count;
        }
    }

    get productIds(){
        return Object.keys(this.items);
    }
}