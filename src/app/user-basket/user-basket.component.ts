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
  
  private products: Product[] = [];

  ngOnInit() {
    console.log("Cart init: ", this.products);
    this.products = this.userBasketService.getCartProducts();
    console.log("prods in service: ",this.products);

    this.userBasketService.cartChanged
    .subscribe(
      (products: Product[]) => {
        this.products = products;
        console.log("subscribe to cart changed: ", this.products);
      }
    )
  }
  
}
