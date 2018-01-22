import { ShoppingCartItem } from "app/models/shopping-cart-item";
import { Product } from "app/models/product";

export class ShoppingCart {
    
    
    constructor(public itemsInCart) {
        console.log("itemsInCart: ",itemsInCart)
        // for(let productId in itemsInCart){
        //     let item = itemsInCart[productId];
        //     this.items.push(new ShoppingCartItem());
        // }
    }
    
    items: ShoppingCartItem[] = [];

    // get totalItemsCount(){
    //     let count = 0;
    //     const objArray = [];
    //     let values:Array<any> = Object.keys(this.itemsMap)
    //     .map( key => this.itemsMap[key])
    //     .map( x => objArray.push(x))
        
    //     let total = objArray.reduce(function(a, b){
    //         return a + b.quantity;
    //     }, 0);
    //     return total;
    // }
    

    get totalPrice(){
        let sum = 0;
        for( let productId in this.items){
            // sum += this.items[productId].totalPrice;
        }
        return sum;
    }

    // getQuantity(product: Product){
    //     let item = this.itemsMap[product.$key];
    //     return item ? item.quantity : 0;
    // }

}