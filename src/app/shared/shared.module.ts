import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserService } from 'app/auth/user.service';
import { ProductQuantityComponent } from 'shared/components/product-quantity/product-quantity.component';
import { ProductComponent } from 'shared/components/product/product.component';
import { AuthGuard } from 'shared/services/auth.guard.service';
import { AuthService } from 'shared/services/auth.service';
import { CategoryService } from 'shared/services/category.service';
import { OrderService } from 'shared/services/order.service';
import { ProductService } from 'shared/services/products.service';
import { UserBasketService } from 'shared/services/user-basket.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ProductComponent, 
    ProductQuantityComponent
  ],
  exports: [
    ProductComponent, 
    ProductQuantityComponent
  ],
  providers: [ 
    ProductService, 
    UserBasketService,
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    AngularFireModule,
    AngularFireDatabase,
    OrderService
  ]
})
export class SharedModule { }
