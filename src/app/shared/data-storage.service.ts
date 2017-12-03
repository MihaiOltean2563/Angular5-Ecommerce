import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { ProductsService } from "app/products/products.service";

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
                private productService: ProductsService){}

    storeProducts(){
        console.log("Save triggered from service!");
        const data = this.productService.getProducts();
        console.log("Data in data-storage:", data);
        return this.http.put('https://ng-ecommerce-d4677.firebaseio.com/products.json',
        data);
    }
}