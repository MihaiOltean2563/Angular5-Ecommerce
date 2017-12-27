import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ElementRef } from '@angular/core';

import { DataStorageService } from 'app/shared/data-storage.service';
import { Response } from '@angular/http';
import { Product } from 'app/products/product.model';
import { ProductService } from 'app/products/products.service';
import { UserBasketService } from 'app/user-basket/user-basket.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products$;
  modalRef: BsModalRef;

  constructor(private dataStorageService: DataStorageService,
              private productService: ProductService,
              private userBasketService: UserBasketService,
              private modalService: BsModalService) { 
                this.products$ = productService.getAll();
              }

  private products: Product[] = [];

  ngOnInit() {
    // this.products = this.productService.getProducts();
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

  addToCart(product: Product){
    console.log("Add to Cart: ", product);
    this.userBasketService.addProductToCart(product);
  }

  viewDetailedProductPage(index: number){
    console.log('index', index);
  }

}
