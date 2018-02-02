import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { CustomFormsModule } from 'ng2-validation';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProductQuantityComponent } from 'shared/components/product-quantity/product-quantity.component';
import { ProductComponent } from 'shared/components/product/product.component';
import { ProductModalDirective } from 'shared/directives/product-modal.directive';
import { AuthGuard } from 'shared/services/auth.guard.service';
import { AuthService } from 'shared/services/auth.service';
import { CategoryService } from 'shared/services/category.service';
import { OrderService } from 'shared/services/order.service';
import { ProductService } from 'shared/services/products.service';
import { UserBasketService } from 'shared/services/user-basket.service';
import { DataTableModule } from 'angular5-data-table';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CustomFormsModule,
    NgbModule.forRoot(),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ModalModule.forRoot(),
    DataTableModule
  ],
  declarations: [
    ProductComponent, 
    ProductQuantityComponent,
    ProductModalDirective
  ],
  exports: [
    ProductComponent, 
    ProductQuantityComponent,
    FormsModule,
    CustomFormsModule,
    CommonModule,
    NgbModule.forRoot().ngModule,
    ModalModule.forRoot().ngModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ProductModalDirective,
    DataTableModule
  ],
  providers: [ 
    ProductService, 
    UserBasketService,
    AuthService,
    AuthGuard,
    CategoryService,
    AngularFireModule,
    AngularFireDatabase,
    OrderService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SharedModule { }
