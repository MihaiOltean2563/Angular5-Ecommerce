import { 
  Component,
  TemplateRef, 
  OnInit, 
  Input,
  ElementRef } from '@angular/core';

import { Product } from 'app/models/product';
import { ProductService } from 'app/products/products.service';
import { UserBasketService } from 'app/user-basket/user-basket.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Routes, RouterModule, Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService,
              private cartService: UserBasketService,
              private modalService: BsModalService,
              private router: Router) {}

              
  modalRef: BsModalRef;
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart;

  ngOnInit() {

    // console.log('product', this.product)
  }

  openModal(template: TemplateRef<ElementRef>){
    this.modalRef = this.modalService.show(template);
  }

  addToCart(){
    this.cartService.addToCart(this.product);
    // console.log("Added to Cart: ", this.product);
  }

  removeFromCart(){
    this.cartService.removeFromCart(this.product);
  }
  
  getQuantity(key){
    if(!this.shoppingCart) return 0;

    let item = this.shoppingCart.itemsMap[this.product.$key];
  
    return item ? item.quantity : 0;
  }

}
