import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Product } from 'app/products/product.model';
import { ProductsService } from 'app/products/products.service';
import { UserBasketService } from 'app/user-basket/user-basket.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductsService,
              private userBasketService: UserBasketService) { }

  @Input() product: Product;

  private products: Product[] = [];

  selectedProduct: Product;
  displayDialog: boolean;

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onSelected(){
    this.productService.selectedProduct.emit(this.product);
  }

  addToCart(){
    console.log("Add to Cart: ", this.product);
    this.userBasketService.addProductToCart(this.product);
  }
}
