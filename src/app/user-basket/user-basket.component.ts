import { Component, OnInit } from '@angular/core';
import { Product } from 'app/products/product.model';

@Component({
  selector: 'app-user-basket',
  templateUrl: './user-basket.component.html',
  styleUrls: ['./user-basket.component.css']
})
export class UserBasketComponent implements OnInit {

  constructor() { }

  // products: Product[] = [
  //   new Product('Motorola XOOM\u2122 with Wi-Fi','motorola',
  //   './assets/img/phones/motorola-xoom-with-wi-fi.0.jpg')
  // ];

  ngOnInit() {
  }

}
