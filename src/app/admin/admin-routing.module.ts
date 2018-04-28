import { NgModule } from '@angular/core';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { RouterModule } from '@angular/router';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { ProductFormComponent } from './product-form/product-form.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
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
