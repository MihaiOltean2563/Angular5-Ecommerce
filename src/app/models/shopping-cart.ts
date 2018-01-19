import { ShoppingCartItem } from "app/models/shopping-cart-item";
import { Product } from "app/models/product";

export class ShoppingCart {
<<<<<<< HEAD
    //The itemsMap we pass to this constructor is not an array, but a node reference 
    //of type AngularFireObject(angularfire2 v5+);
    constructor(public itemsMap: {[productId: string]: ShoppingCartItem}) { 
        console.log("itemsMap", itemsMap);
=======

    //The itemsMap we pass to this constructor is not an array, but an object of type AngularFireObject(angularfire2 v5+);
    constructor(public itemsMap: {[productId: string]: ShoppingCartItem}) {
        // console.log("itemsMap: ", itemsMap)
>>>>>>> 8a0932b7c9ade2da649637e3048bd8541fb0de72
        for(let productId in itemsMap){
            let item = itemsMap[productId];
            this.items.push(new ShoppingCartItem(item.product, item.quantity));
        }
    }

    items: ShoppingCartItem[] = [];

    // get totalItemsCount(){
    //     let count = 0;
    //     const objArray = [];
    //     let values:Array<any> = Object.keys(this.itemsMap)
    //     .map( key => this.itemsMap[key])
    //     .map( x => objArray.push(x))

<<<<<<< HEAD
    //     let total = objArray.reduce(function(a, b){
    //         return a + b.quantity;
    //     }, 0);
        
    //     return total;
    // }
=======
        let total = objArray.reduce(function(a, b){
            return a + b.quantity;
        }, 0);
        return total;
    }
>>>>>>> 8a0932b7c9ade2da649637e3048bd8541fb0de72

    get totalPrice(){
        let sum = 0;
        for( let productId in this.items){
            sum += this.items[productId].totalPrice;
        }
        return sum;
    }

    getQuantity(product: Product){
<<<<<<< HEAD
        // console.log("product", product);
=======
>>>>>>> 8a0932b7c9ade2da649637e3048bd8541fb0de72
        let item = this.itemsMap[product.$key];
        return item ? item.quantity : 0;
    }

}