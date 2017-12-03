import { Component, OnInit } from '@angular/core';
import { Product } from 'app/products/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

   products: Product[] = [
    new Product('Motorola XOOM\u2122 with Wi-Fi','motorola',
    './assets/img/phones/motorola-xoom-with-wi-fi.0.jpg'),
    new Product('Motorola XOOM\u2122 with Wi-Fi','motorola',
    './assets/img/phones/motorola-xoom-with-wi-fi.0.jpg')
  ];


  ngOnInit() {
  }

}
