import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "app/products/products.component";
import { UserBasketComponent } from "app/user-basket/user-basket.component";
import { ProductStartComponent } from "app/products/product-start/product-start.component";
import { ProductDetailComponent } from "app/products/product-detail/product-detail.component";
import { HomeComponent } from "app/home/home.component";
import { CheckoutComponent } from "app/checkout/checkout.component";
import { OrderSuccessComponent } from "app/order-success/order-success.component";
import { LoginComponent } from "app/login/login.component";
import { AdminProductsComponent } from "app/admin/admin-products/admin-products.component";
import { AdminOrdersComponent } from "app/admin/admin-orders/admin-orders.component";
import { MyOrdersComponent } from "app/my-orders/my-orders.component";


const appRoutes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'products', component: ProductsComponent},
 { path: 'products/:id', component: ProductDetailComponent},
 { path: 'basket', component: UserBasketComponent},
 { path: 'checkout', component: CheckoutComponent},
 { path: 'my-orders', component: MyOrdersComponent},
 { path: 'order-success', component: OrderSuccessComponent},
 { path: 'login', component: LoginComponent},
 { path: 'admin/products', component: AdminProductsComponent},
 { path: 'admin/orders', component: AdminOrdersComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}