import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductComponent } from './products/product-list/product/product.component';
import { UserBasketComponent } from './user-basket/user-basket.component';
import { UserBasketEditComponent } from './user-basket/user-basket-edit/user-basket-edit.component';
import { AppRoutingModule } from 'app/app.routing.module';

//Services 
import { ProductsService } from './products/products.service';
import { DataStorageService } from './shared/data-storage.service';
import { UserBasketService } from 'app/user-basket/user-basket.service';

//PrimeFaces
import { ButtonModule, SharedModule, DataGridModule, PanelModule, DialogModule } from 'primeng/primeng';
import { ProductStartComponent } from './products/product-start/product-start.component';

//Ngx-Bootstrap
// import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
// import { ModalBackdropComponent } from 'ngx-bootstrap/modal/modal-backdrop.component';
// import { PositioningService } from 'ngx-bootstrap/positioning';
import { ModalModule } from 'ngx-bootstrap/modal';
// import { BsModalService } from 'ngx-bootstrap/modal';
// import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


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
    ProductStartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CommonModule,
    SharedModule,
    ButtonModule,
    DataGridModule,
    PanelModule,
    DialogModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [
    ProductsService, 
    DataStorageService, 
    UserBasketService,
    // BsModalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
