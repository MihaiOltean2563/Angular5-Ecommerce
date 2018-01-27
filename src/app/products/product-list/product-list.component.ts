import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, TemplateRef, ElementRef } from '@angular/core';

import { DataStorageService } from 'app/shared/data-storage.service';
import { Response } from '@angular/http';
import { Product } from 'app/models/product';
import { ProductService } from 'app/products/products.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { UserBasketService } from 'app/user-basket/user-basket.service';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCart } from 'app/models/shopping-cart';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  category:string;
  filteredProducts: Product[] = [];
  cart: ShoppingCart;
  subscription: Subscription;

  constructor(private dataStorageService: DataStorageService,
              private productService: ProductService,
              private route: ActivatedRoute,
              private shoppingCartService: UserBasketService) {

                productService.getAll()
                .switchMap(products => {
                      this.products = products;
                      return route.queryParamMap;
                })

                .subscribe(data => {
                  this.category = data.get('category');

                  this.filteredProducts =  (this.category) ? 
                        this.products.filter( p => p.category === this.category.toLowerCase()) : 
                        this.products;
                });

              }
    

  async ngOnInit() {
     this.subscription = (await this.shoppingCartService.getCart())
      .subscribe(cart => {
        this.cart = cart;
      })
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
