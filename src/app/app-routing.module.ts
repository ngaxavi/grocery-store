import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/auth.guard';
import { AdminGuard } from '@core/admin.guard';
import { ProductsComponent } from '@shopping/products/products.component';

const accountModulePath = 'app/account/account.module#AccountModule';
const shoppingModulePath = 'app/shopping/shopping.module#ShoppingModule';
const adminModulePath = 'app/admin/admin.module#AdminModule';

const ROUTES: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'login',
    loadChildren: accountModulePath
  },
  {
    path: 'register',
    loadChildren: accountModulePath
  },
  {
    path: 'shopping-cart',
    loadChildren: shoppingModulePath
  },
  {
    path: 'products',
    loadChildren: shoppingModulePath
  },
  {
    path: 'check-out',
    loadChildren: shoppingModulePath,
    canActivate: [AuthGuard]
  },
  {
    path: 'order-success',
    loadChildren: shoppingModulePath,
    canActivate: [AuthGuard]
  },
  {
    path: 'my-orders',
    loadChildren: shoppingModulePath,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: adminModulePath,
    canActivate: [AuthGuard, AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
