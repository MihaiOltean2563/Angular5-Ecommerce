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

              
  private products: Product[] = [];
  modalRef: BsModalRef;
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart;

  ngOnInit() {
  }

  openModal(template: TemplateRef<ElementRef>){
    this.modalRef = this.modalService.show(template);
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    console.log("Add to Cart: ", product);
  }
  
    getQuantity(){
    // let cart$ = (await this.cartService.getCart()).valueChanges();
    // return cart$.subscribe( cart => {
    //   if(!cart) return 0;
    //   return cart.items[this.product.$key]['quantity'];
    // })
    if(!this.shoppingCart) return 0;
  
    let item = this.shoppingCart.items[this.product.$key];
    return item ? item.quantity : 0;
  }

}
