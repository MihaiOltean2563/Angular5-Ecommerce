import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "app/shopping/components/products/products.component";
import { UserBasketComponent } from "app/shopping/components/user-basket/user-basket.component";
import { ProductDetailComponent } from "app/shopping/components/products/product-detail/product-detail.component";
import { HomeComponent } from "app/core/components/home/home.component";
import { CheckoutComponent } from "app/shopping/components/checkout/checkout.component";
import { OrderSuccessComponent } from "app/shopping/components/order-success/order-success.component";
import { LoginComponent } from "app/core/components/login/login.component";
import { AdminProductsComponent } from "app/admin/components/admin-products/admin-products.component";
import { AdminOrdersComponent } from "app/admin/components/admin-orders/admin-orders.component";
import { MyOrdersComponent } from "app/shopping/components/my-orders/my-orders.component";
import { AuthGuard } from "app/shared/services/auth.guard.service";
import { AdminAuthGuard } from "app/admin/services/admin-auth-guard.service";
import { ProductFormComponent } from "app/admin/components/product-form/product-form.component";


// const appRoutes: Routes = [
//  { path: '', component: HomeComponent },
//  { path: 'login', component: LoginComponent},
//  { path: 'products', component: ProductsComponent},
//  { path: 'products/:id', component: ProductDetailComponent},
//  { path: 'basket', component: UserBasketComponent},

//  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard]},
//  { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuard]},
//  { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard]},
 
 
//  { 
//      path: 'admin/products/new', 
//      component: ProductFormComponent, 
//      canActivate: [AuthGuard, AdminAuthGuard]
//  },
//  { 
//      path: 'admin/products/:id', 
//      component: ProductFormComponent, 
//      canActivate: [AuthGuard, AdminAuthGuard]
//  },    
//  { 
//     path: 'admin/products', 
//     component: AdminProductsComponent, 
//     canActivate: [AuthGuard, AdminAuthGuard]
//  },
//  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard, AdminAuthGuard]},
// ];
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}