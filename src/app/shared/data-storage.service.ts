import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { ProductService } from "app/products/products.service";
import { Product } from "app/products/product.model";

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
                private productService: ProductService){}

    // storeProducts(){
    //     console.log("Save triggered from service!");
    //     const data = this.productService.getProducts();
    //     console.log("Data in data-storage:", data);
    //     return this.http.put('https://ng-ecommerce-d4677.firebaseio.com/products.json',
    //     data);
    // }

    // getProducts(){
    //     console.log("Get triggered from service!");
    //     return this.http.get('https://ng-ecommerce-d4677.firebaseio.com/products.json')
    //         .subscribe(
    //             (response: Response) => {
    //                 const products: Product[] = response.json();
    //                 console.log("Products from get in data-storage: ", products);
    //                 this.productService.setProducts(products);
    //             }
    //         );
    // }
}