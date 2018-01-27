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
import { ShoppingCart } from 'app/models/shopping-cart';
import { Subscription } from 'rxjs/Subscription';


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
  cart: Observable<ShoppingCart>;
  subscription: Subscription;
  itemInCart;
  itemQ: number;

  @Input('product') product: Product;
  @Input('cart') shoppingCart: ShoppingCart;

  async ngOnInit() {
    // console.log("cart in product", this.shoppingCart);
    // console.log(" product", this.product);
    this.itemInCart = await this.cartService.getItem(this.product.title);
    
    let subscription = this.itemInCart
   
    .subscribe( item => {
      if(item){
        this.itemQ = item.quantity;
      }else{
        this.itemQ =  0;
      }
    })
  }

  openModal(template: TemplateRef<ElementRef>){
    this.modalRef = this.modalService.show(template);
  }

  addToCart(){
    this.cartService.addToCart(this.product);
    console.log("Added to Cart: ", this.product);
  }
  

}
