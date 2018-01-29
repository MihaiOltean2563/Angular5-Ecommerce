import { ShoppingCart } from "./shopping-cart";

export class Order {

    dataPlaced: number;
    items: any[];

    constructor(public userId: string, public shipping: any, public shoppingCart: ShoppingCart){
        this.dataPlaced = new Date().getTime();
        
        shoppingCart.items.map( i => {
            return {
              product: {
                title: i.title,
                imageUrl: i.imageUrl,
                price: i.price
              },
              quantity: i.quantity,
              totalPrice: i.totalPrice
            }
          })
    }
}