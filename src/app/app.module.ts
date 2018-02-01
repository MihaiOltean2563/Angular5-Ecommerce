//angular 
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppRoutingModule } from 'app/app.routing.module';
import { AdminAuthGuard } from 'app/admin/services/admin-auth-guard.service';
import { ProductModalDirective } from 'app/shared/directives/product-modal.directive';
import { CustomFormsModule } from 'ng2-validation';
import { ModalModule } from 'ngx-bootstrap/modal';

import { environment } from './../environments/environment';

import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductFilterComponent } from './products/product-list/product-filter/product-filter.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { ShippingFormComponent } from './user-basket/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './user-basket/shopping-cart-summary/shopping-cart-summary.component';
import { UserBasketEditComponent } from './user-basket/user-basket-edit/user-basket-edit.component';
import { UserBasketComponent } from './user-basket/user-basket.component';
import { SharedModule } from 'shared/shared.module';
import { AdminModule } from 'app/admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductListComponent,
    ProductDetailComponent,
    UserBasketComponent,
    UserBasketEditComponent,
    ProductModalDirective,
    HomeComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    LoginComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent
  ],
  imports: [
    DataTableModule,
    BrowserModule,
    SharedModule,
    AdminModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CommonModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    CustomFormsModule,
    HttpClientModule
  ],
  providers: [
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
