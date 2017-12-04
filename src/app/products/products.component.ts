import { Component, OnInit } from '@angular/core';
import { Product } from 'app/products/product.model';
import { ProductsService } from 'app/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductsService) { }
  
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
