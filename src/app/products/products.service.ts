import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Product } from 'app/products/product.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProductsService {
    constructor(private http: Http){}

    productsChanged = new Subject<Product[]>();
    
    products: Product[] = [
        new Product('Motorola XOOM\u2122 with Wi-Fi','motorola','./assets/img/phones/motorola-xoom-with-wi-fi.0.jpg'),
        new Product('Motorola XOOM\u2122 with Wi-Fi','motorola','./assets/img/phones/motorola-xoom-with-wi-fi.0.jpg'),
        new Product('Motorola XOOM\u2122 with Wi-Fi','motorola','./assets/img/phones/motorola-xoom-with-wi-fi.0.jpg'),
    ];
   
    getProducts() {
        console.log(this.products);
        return this.products.slice();
    };
}