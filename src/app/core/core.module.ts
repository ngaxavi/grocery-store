import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AdminGuard } from './admin.guard';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { ShoppingCartService } from './shopping-cart.service';
import { OrderService } from './order.service';

@NgModule({
  imports: [AngularFireAuthModule, AngularFirestoreModule],
  providers: [AuthService, AuthGuard, AdminGuard, CategoryService, ProductService, ShoppingCartService, OrderService]
})
export class CoreModule {}
