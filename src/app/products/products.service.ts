import {Injectable, EventEmitter} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Product } from 'app/products/product.model';
import { Subject } from 'rxjs/Subject';
import { UserBasketService } from 'app/user-basket/user-basket.service';


@Injectable()
export class ProductsService {
    constructor(private http: Http,
                private userBasketService: UserBasketService){}

    productsChanged = new Subject<Product[]>();
    selectedProduct = new EventEmitter<Product>();

    private products: Product[] = [
        new Product('Motorola XOOM\u2122 with Wi-Fi','motorola','./assets/img/phones/motorola-xoom-with-wi-fi.0.jpg'),
        new Product('Iphone 6s','motorola','./assets/img/phones/motorola-xoom-with-wi-fi.0.jpg'),
        new Product('Samsung Galaxy X','motorola','./assets/img/phones/motorola-xoom-with-wi-fi.0.jpg'),
    ];
   
    getProducts() {
        return this.products.slice();
    };

    setProducts(products: Product[]){
        this.products = products;
        this.productsChanged.next(this.products.slice());
    }

    addProductToCart(product: Product){
        this.userBasketService.addProductToCart(product);
    }
}