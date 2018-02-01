import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent implements OnChanges  {

  @Input('cart') cart: ShoppingCart;
 
  ngOnChanges(changes: SimpleChanges) {
    // cart only exists here since by the time this child component is rendered, the cart observable
    //does not exist in parent yet( and the assignment ), so the values from this cart should be 
    //used in the template with the optional "?" 
    // console.log("cart", this.cart);
   }
 
}
