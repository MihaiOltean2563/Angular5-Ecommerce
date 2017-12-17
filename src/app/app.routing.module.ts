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
import { AuthGuard } from "app/auth/auth.guard.service";
import { AdminAuthGuard } from "app/auth/admin-auth-guard.service";


const appRoutes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'login', component: LoginComponent},
 { path: 'products', component: ProductsComponent},
 { path: 'products/:id', component: ProductDetailComponent},
 { path: 'basket', component: UserBasketComponent},

 { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard]},
 { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuard]},
 { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard]},
 
 { 
     path: 'admin/products', 
     component: AdminProductsComponent, 
     canActivate: [AuthGuard, AdminAuthGuard]
 },
 { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard, AdminAuthGuard]},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}