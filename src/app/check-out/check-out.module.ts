import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckOutComponent } from './check-out.component';
import { CheckOutRoutingModule } from './check-out-routing.module';
import { FormsModule } from '@angular/forms';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';

@NgModule({
  imports: [CommonModule, CheckOutRoutingModule, FormsModule],
  declarations: [CheckOutComponent, ShoppingCartSummaryComponent, ShippingFormComponent]
})
export class CheckOutModule {}
