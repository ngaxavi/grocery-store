import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'shopping-cart',
    loadChildren: 'app/shopping-cart/shopping-cart.module#ShoppingCartModule'
  },
  {
    path: 'products',
    loadChildren: 'app/products/products.module#ProductsModule'
  },
  {
    path: 'check-out',
    loadChildren: 'app/check-out/check-out.module#CheckOutModule'
  },
  {
    path: 'order-success',
    loadChildren: 'app/order-success/order-success.module#OrderSuccessModule'
  },
  {
    path: 'my-orders',
    loadChildren: 'app/my-orders/my-orders.module#MyOrdersModule'
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
