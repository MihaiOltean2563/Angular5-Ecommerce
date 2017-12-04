import { Component, OnInit } from '@angular/core';
import { Product } from 'app/products/product.model';
import { UserBasketService } from 'app/user-basket/user-basket.service';

@Component({
  selector: 'app-user-basket',
  templateUrl: './user-basket.component.html',
  styleUrls: ['./user-basket.component.css']
})
export class UserBasketComponent implements OnInit {

  constructor(private userBasketService: UserBasketService) { }
  
  private products: Product[] = [
    new Product('Motorola XOOM\u2122 with Wi-Fi','motorola',
    './assets/img/phones/motorola-xoom-with-wi-fi.0.jpg')
  ];

  ngOnInit() {
    this.userBasketService.cartChanged
    .subscribe(
      (products: Product[]) => {
        console.log("cart: ", this.products);
        this.products = products;
        console.log(this.products);
      }
    )
  }
  
}
