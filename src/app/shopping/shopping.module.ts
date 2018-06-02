import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckOutComponent } from './check-out/check-out.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SharedModule } from '@shared/shared.module';
import { ProductFilterComponent } from './product-filter/product-filter.component';

@NgModule({
  imports: [CommonModule, ShoppingRoutingModule, FormsModule, SharedModule],
  declarations: [
    MyOrdersComponent,
    OrderSuccessComponent,
    ProductsComponent,
    CheckOutComponent,
    ProductsComponent,
    ProductFilterComponent,
    ShoppingCartComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent
  ]
})
export class ShoppingModule {}
