import { ShoppingCartItem } from "app/models/shopping-cart-item";
import { Product } from "app/models/product";

export class ShoppingCart {

    //The itemsMap we pass to this constructor is not an array, but an object of type AngularFireObject(angularfire2 v5+);
    constructor(public itemsMap: {[productId: string]: ShoppingCartItem}) {
        // console.log("itemsMap: ", itemsMap)
        for(let productId in itemsMap){
            let item = itemsMap[productId];
            this.items.push(new ShoppingCartItem());
        }
    }

    items: ShoppingCartItem[] = [];

<<<<<<< HEAD
    get totalItemsCount(){
        let count = 0;
        const objArray = [];
        let values:Array<any> = Object.keys(this.itemsMap)
        .map( key => this.itemsMap[key])
        .map( x => objArray.push(x))

        let total = objArray.reduce(function(a, b){
            return a + b.quantity;
        }, 0);
        return total;
    }

    // get totalPrice(){
    //     let sum = 0;
    //     for( let productId in this.items){
    //         sum += this.items[productId].totalPrice;
    //     }
    //     return sum;
    // }

    // getQuantity(product: Product){
    //     let item = this.itemsMap[product.$key];
    //     return item ? item.quantity : 0;
    // }
=======
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

    getQuantity(product: Product){
        let item = this.itemsMap[product.$key];
        return item ? item.quantity : 0;
    }
>>>>>>> 5404417accf740612683a201866b3382ab486abd

}