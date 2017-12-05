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

  @Input() product: Product;
  @Output() productSelected = new EventEmitter<void>();

  private products: Product[] = [

  ];

  selectedProduct: Product;
  displayDialog: boolean;

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onSelected(){
    this.productSelected.emit();
  }

  addToCart(product: Product){
    this.productService.addProductToCart(product);
  }
}
