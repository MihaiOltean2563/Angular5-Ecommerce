import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "app/products/products.component";
import { UserBasketComponent } from "app/user-basket/user-basket.component";
import { ProductStartComponent } from "app/products/product-start/product-start.component";
import { ProductDetailComponent } from "app/products/product-detail/product-detail.component";


const appRoutes: Routes = [
 { path: '', redirectTo: 'products', pathMatch: 'full' },
 { path: 'products', component: ProductsComponent, children: [
     { path: '', component: ProductStartComponent}
 ]},
 { path: 'products/:id', component: ProductDetailComponent},
 { path: 'basket', component: UserBasketComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}