import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'app/shared/data-storage.service';
import { AuthService } from 'app/auth/auth.service';
import { AppUser } from 'app/models/app-user';
import { UserBasketService } from 'app/user-basket/user-basket.service';
import { ShoppingCart } from 'app/models/shopping-cart';
import { AngularFireObject } from 'angularfire2/database/interfaces';
import { Subscription } from 'rxjs/Subscription';
import { User } from 'firebase/app';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  user: Observable<User>;

  constructor(
    private dataStorageService: DataStorageService,
    private auth: AuthService,
    private cartService: UserBasketService){
  }


  async ngOnInit() {
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
