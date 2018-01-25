import { ShoppingCartItem } from "app/models/shopping-cart-item";
import { Product } from "app/models/product";

export class ShoppingCart {
    
    
    constructor(public itemsInCart) {
        // console.log("itemsInCart: ",itemsInCart)
        this.items = itemsInCart;
    }
    
    items: ShoppingCartItem[] = [];

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
    

    get totalPrice(){
        let sum = 0;
        for(let prod in this.items){
            sum += this.items[prod].price;
        }
        return sum;
    }

    getQuantity(product: Product){
        // let item = this.itemsMap[product.$key];
        // return item ? item.quantity : 0;
        // console.log('getQ', product)
        // return this.itemsInCart.map( item => item.title == product.title ? item.quantity : 0);
    }

}