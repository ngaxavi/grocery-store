import { NgModule } from '@angular/core';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { RouterModule } from '@angular/router';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        children: [
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
