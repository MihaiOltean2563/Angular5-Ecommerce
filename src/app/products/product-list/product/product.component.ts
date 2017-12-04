import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'app/products/product.model';
import { ProductsService } from 'app/products/products.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  private products: Product[];
  selectedProduct: Product;
  displayDialog: boolean;

  ngOnInit() {
    this.products = this.productService.getProducts();
    console.log("prods", this.products);
  }


  selectProduct(product: Product){
    this.selectedProduct = product;
    this.displayDialog = true;
  }
  onDialogHide() {
    this.selectedProduct = null;
  }

  addToCart(product: Product){
    console.log('Added' + product + 'to Cart!');
    this.productService.selectedProduct.emit(product);
  }
}
