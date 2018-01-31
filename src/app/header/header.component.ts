import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/shared/services/auth.service';
import { AppUser } from 'shared/models/app-user';
import { UserBasketService } from 'app/shared/services/user-basket.service';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { AngularFireObject } from 'angularfire2/database/interfaces';
import { Subscription } from 'rxjs/Subscription';



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
    // this.auth.user.subscribe(user => {
    //   this.appuserUser = user;
    //   console.log("user", user.displayName);
    // });
    // this.user = this.auth.user$;
    this.cart$ = await this.cartService.getCart();
  }
  

  logout(){
    this.auth.logout();
  }

}
