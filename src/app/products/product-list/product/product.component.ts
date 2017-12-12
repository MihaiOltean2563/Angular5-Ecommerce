import { 
  Component,
  TemplateRef, 
  OnInit, 
  Input,
  ElementRef } from '@angular/core';

import { Product } from 'app/products/product.model';
import { ProductsService } from 'app/products/products.service';
import { UserBasketService } from 'app/user-basket/user-basket.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductsService,
              private userBasketService: UserBasketService,
              private modalService: BsModalService) { }


  private products: Product[] = [];
  @Input() index: number;
  @Input() product: Product;

  modalRef: BsModalRef;

  ngOnInit() {}

  openModal(template: TemplateRef<ElementRef>){
    this.modalRef = this.modalService.show(template);
  }

  addToCart(){
    console.log("Add to Cart: ", this.product);
    this.userBasketService.addProductToCart(this.product);
  }
}
