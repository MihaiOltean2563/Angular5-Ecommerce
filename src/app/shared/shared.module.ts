import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
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

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    NgbModule.forRoot(),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ModalModule.forRoot(),
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
    DataTableModule,
    CommonModule,
    NgbModule.forRoot().ngModule,
    ModalModule.forRoot().ngModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ProductModalDirective
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
  ]
})
export class SharedModule { }
