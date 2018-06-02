import { NgModule } from '@angular/core';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { RouterModule } from '@angular/router';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { AuthGuard } from '@core/auth.guard';
import { AdminGuard } from '@core/admin.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        canActivate: [AuthGuard, AdminGuard],
        children: [
          {
            path: 'products/new',
            component: ProductFormComponent
          },
          {
            path: 'products/:id',
            component: ProductFormComponent
          },
          {
            path: 'products',
            component: AdminProductsComponent
          },
          {
            path: 'orders',
            component: AdminOrdersComponent
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
