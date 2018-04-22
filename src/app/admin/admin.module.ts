import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [CommonModule, AdminRoutingModule],
  declarations: [AdminProductsComponent, AdminOrdersComponent]
})
export class AdminModule {}