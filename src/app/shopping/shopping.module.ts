import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from 'app/shopping/components/checkout/checkout.component';
import { MyOrdersComponent } from 'app/shopping/components/my-orders/my-orders.component';
import { OrderSuccessComponent } from 'app/shopping/components/order-success/order-success.component';
import { ProductDetailComponent } from 'app/shopping/components/products/product-detail/product-detail.component';
import {
  ProductFilterComponent,
} from 'app/shopping/components/products/product-list/product-filter/product-filter.component';
import { ProductListComponent } from 'app/shopping/components/products/product-list/product-list.component';
import { ProductsComponent } from 'app/shopping/components/products/products.component';
import { ShippingFormComponent } from 'app/shopping/components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from 'app/shopping/components/shopping-cart-summary/shopping-cart-summary.component';
import { UserBasketComponent } from 'app/shopping/components/user-basket/user-basket.component';
import { AuthGuard } from 'shared/services/auth.guard.service';
import { CategoryService } from 'shared/services/category.service';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent},
      { path: 'products/:id', component: ProductDetailComponent},
      { path: 'basket', component: UserBasketComponent},
  
      { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard]},
      { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuard]},
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard]}
    ])
  ],
  declarations: [
    ProductsComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    UserBasketComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  providers: [CategoryService]
})
export class ShoppingModule { }
