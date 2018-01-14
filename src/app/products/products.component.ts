import { Component, OnInit } from '@angular/core';
import { Product } from 'app/models/product';
import { ProductService } from 'app/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }
  
  selectedProduct: Product;

  ngOnInit() {
    this.productService.selectedProduct
       .subscribe(
         (product: Product) => {
           this.selectedProduct = product;
           console.log("selectedProduct", this.selectedProduct)
         }
       )
  }
  
}
