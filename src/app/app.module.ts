//angular 
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

//Angular Firebase
import { AngularFireModule } from 'angularfire2';
import {
  AngularFireDatabaseModule,
  AngularFireDatabase, 
  FirebaseListObservable, 
  FirebaseObjectObservable } 
from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';



//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductComponent } from './products/product-list/product/product.component';
import { UserBasketComponent } from './user-basket/user-basket.component';
import { UserBasketEditComponent } from './user-basket/user-basket-edit/user-basket-edit.component';
import { AppRoutingModule } from 'app/app.routing.module';
//Ng Bootstrap directives Module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Services 
import { ProductsService } from './products/products.service';
import { DataStorageService } from './shared/data-storage.service';
import { UserBasketService } from 'app/user-basket/user-basket.service';

//Ngx-Bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

//Directives
import { ProductModalDirective } from 'app/shared/product-modal.directive';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from 'app/auth/auth.service';
import { AuthGuard } from 'app/auth/auth.guard.service';
import { UserService } from 'app/auth/user.service';
import { AdminAuthGuard } from 'app/auth/admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './shared/category.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductComponent,
    UserBasketComponent,
    UserBasketEditComponent,
    ProductModalDirective,
    HomeComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CommonModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot()
  ],
  providers: [
    ProductsService, 
    DataStorageService, 
    UserBasketService,
    AuthService,
    AuthGuard,
    UserService,
    AdminAuthGuard,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
