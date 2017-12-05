import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DataStorageService } from 'app/shared/data-storage.service';
import { Response } from '@angular/http';
import { Product } from 'app/products/product.model';
import { ProductsService } from 'app/products/products.service';
import { UserBasketService } from 'app/user-basket/user-basket.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService,
              private productService: ProductsService,
              private userBasketService: UserBasketService) { }

  private products: Product[] = [
    new Product('Motorola XOOM\u2122 with Wi-Fi','motorola',
    './assets/img/phones/motorola-xoom-with-wi-fi.0.jpg'),
    new Product('Motorola XOOM\u2122 with Wi-Fi','motorola',
    'motorola-xoom.0.jpg'),
    new Product('Motorola XOOM\u2122 with Wi-Fi','motorola',
    './assets/img/phones/motorola-xoom-with-wi-fi.0.jpg'),
  ];

  @Output() selectedProduct = new EventEmitter<Product>();

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onProductSelected(product: Product){
    console.log("onProductSelected:",product);
    this.selectedProduct.emit(product);
  }

 
  onSaveData(){
    console.log("Save triggered from product-list component!");
    this.dataStorageService.storeProducts()
      .subscribe(
        (response: Response) =>{
          console.log(response);
        }
      );
  };

  onFetchData(){
    console.log("Get triggered from product-list component!");
    this.dataStorageService.getProducts();
  };
  

}
