import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, AdminRoutingModule, FormsModule],
  declarations: [AdminProductsComponent, AdminOrdersComponent, ProductFormComponent]
})
export class AdminModule {}
