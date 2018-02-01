import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'shared/shared.module';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'shared/services/auth.guard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DataTableModule,
    RouterModule,
    RouterModule.forChild([
      { 
          path: 'admin/products/new', 
          component: ProductFormComponent, 
          canActivate: [AuthGuard, AdminAuthGuard]
      },
      { 
          path: 'admin/products/:id', 
          component: ProductFormComponent, 
          canActivate: [AuthGuard, AdminAuthGuard]
      },    
      { 
         path: 'admin/products', 
         component: AdminProductsComponent, 
         canActivate: [AuthGuard, AdminAuthGuard]
      },
      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard, AdminAuthGuard]},
     ])
  ],
  declarations: [
    ProductFormComponent,
    AdminProductsComponent,
    AdminOrdersComponent
  ],
  providers: [AdminAuthGuard]
})
export class AdminModule { }
