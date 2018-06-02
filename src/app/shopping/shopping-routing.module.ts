import { NgModule } from '@angular/core';
import { CheckOutComponent } from './check-out/check-out.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../core/auth.guard';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsComponent } from './products/products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'check-out',
        component: CheckOutComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'my-orders',
        component: MyOrdersComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent
      },
      {
        path: 'order-success',
        canActivate: [AuthGuard],
        children: [
          {
            path: ':id',
            component: OrderSuccessComponent
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ShoppingRoutingModule {}
