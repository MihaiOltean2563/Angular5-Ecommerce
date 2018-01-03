import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ElementRef } from '@angular/core';

import { DataStorageService } from 'app/shared/data-storage.service';
import { Response } from '@angular/http';
import { Product } from 'app/models/product';
import { ProductService } from 'app/products/products.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products: Product[] = [];
  modalRef: BsModalRef;
  
  category:string;
  filteredProducts: Product[] = [];

  constructor(private dataStorageService: DataStorageService,
              private productService: ProductService,
              private modalService: BsModalService,
              private route: ActivatedRoute) {

                productService.getAll()
                  .switchMap(products => {
                    this.products = products;
                    return route.queryParamMap;
                  })

                  .subscribe(params => {
                    this.category = params.get('category');
  
                    this.filteredProducts = (this.category) ? 
                      this.products.filter( p => p.category === this.category) :
                      this.products;
                  });


               
              }

  ngOnInit() {
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
  
  openModal(template: TemplateRef<ElementRef>){
    this.modalRef = this.modalService.show(template);
  }

  // addToCart(product: Product){
  //   console.log("Add to Cart: ", product);
  //   this.userBasketService.addProductToCart(product);
  // }

  viewDetailedProductPage(index: number){
    console.log('index', index);
  }

}
