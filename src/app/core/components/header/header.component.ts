import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/shared/services/auth.service';
import { UserBasketService } from 'app/shared/services/user-basket.service';
import { Observable } from 'rxjs/Observable';
import { AppUser } from 'shared/models/app-user';
import { ShoppingCart } from 'shared/models/shopping-cart';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  user: Observable<any>;

  constructor(
    private auth: AuthService,
    private cartService: UserBasketService){
  }


  async ngOnInit() {
    console.log("auth", this.auth);
    this.user = this.auth.user;
    this.user.subscribe( user => this.appUser = user);
    this.cart$ = await this.cartService.getCart();
  }
  

  logout(){
    this.auth.logout();
  }

}
