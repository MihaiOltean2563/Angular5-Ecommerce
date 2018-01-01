import {Injectable, EventEmitter} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Product } from 'app/products/product.model';
import { Subject } from 'rxjs/Subject';
import { UserBasketService } from 'app/user-basket/user-basket.service';
import { AngularFireDatabase,  } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireList } from 'angularfire2/database/interfaces';


@Injectable()
export class ProductService {

    constructor(private http: Http,
                private userBasketService: UserBasketService,
                private db: AngularFireDatabase){
                    
                }
   
    productsChanged = new Subject<Product[]>();
    selectedProduct = new EventEmitter<Product>();
    firebaseProducts$;
    
    private products: Product[] = [
        new Product('Motorola XOOM\u2122 with Wi-Fi','motorola','./assets/img/phones/motorola-xoom-with-wi-fi.0.jpg'),
        new Product('Iphone 6s','motorola','./assets/img/phones/samsung-gem.0.jpg'),
        new Product('Samsung Galaxy X','motorola','./assets/img/phones/dell-streak-7.0.jpg'),
    ];
   
    getProducts() {
        return this.products.slice();
    };

    getProduct(index: number){
        return this.firebaseProducts$[index];
    }

    setProducts(products: Product[]){
        this.products = products;
        this.productsChanged.next(this.products.slice());
    }

    // addProductToCart(product: Product){
    //     this.userBasketService.addProductToCart(product);
    // }

    //Firebase
    create(product){
        console.log("Saved: " + product + "to Firebase DB !");
        return this.db.list('/products').push(product);
    }

    getAll() {
        return this.db.list('/products').snapshotChanges().map(action => {
          return action.map(
            item => {
                const $key = item.payload.key;
                const data = { $key, ...item.payload.val() };
                // console.log("data from firebase: ", data)
                return data;
          });
        });
    }

    get(productId){
        return this.db.object('/products/' + productId);
    }

    update(productId, product){
       return this.db.object('/products/'+ productId).update(product);
    }

    delete(productId){
        return this.db.object('/products/'+ productId).remove();
    }
}