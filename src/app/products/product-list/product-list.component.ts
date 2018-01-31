import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, TemplateRef, ElementRef } from '@angular/core';

import { Response } from '@angular/http';
import { Product } from 'shared/models/product';
import { ProductService } from 'app/shared/services/products.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { UserBasketService } from 'app/shared/services/user-basket.service';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products: Product[] = [];
  category:string;
  filteredProducts: Product[] = [];
  cart$: Observable<ShoppingCart>;
  subscription: Subscription;
  cart: ShoppingCart;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private shoppingCartService: UserBasketService) {}
    

  ngOnInit(){
    this.populateProducts();
  }


  private populateProducts(){    
    this.productService.getAll()
    .switchMap(products => {
          this.products = products;
          return this.route.queryParamMap;
    })
    .subscribe(data => {
      this.category = data.get('category');
      this.applyFilter();
    });
  }

  private applyFilter(){
    this.filteredProducts =  (this.category) ? 
    this.products.filter( p => p.category === this.category.toLowerCase()) : 
    this.products;
  }


}
