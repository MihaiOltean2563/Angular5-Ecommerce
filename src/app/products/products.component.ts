import { Component, OnInit } from '@angular/core';
import { Product } from 'shared/models/product';
import { ProductService } from 'app/shared/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent{

  constructor() { }
 
}
