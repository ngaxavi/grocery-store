import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/auth.guard';
import { AdminGuard } from './core/admin.guard';
import { RegisterComponent } from './register/register.component';

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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
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
    loadChildren: 'app/check-out/check-out.module#CheckOutModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'order-success',
    loadChildren: 'app/order-success/order-success.module#OrderSuccessModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'my-orders',
    loadChildren: 'app/my-orders/my-orders.module#MyOrdersModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canActivate: [AuthGuard, AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
