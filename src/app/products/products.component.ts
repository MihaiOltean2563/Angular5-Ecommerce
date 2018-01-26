import { Component, OnInit } from '@angular/core';
import { Product } from 'app/models/product';
import { ProductService } from 'app/products/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent{

  constructor() { }
 
}
