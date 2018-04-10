import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSuccessComponent } from './order-success.component';
import { OrderSuccessRoutingModule } from './order-success-routing.module';

@NgModule({
  imports: [CommonModule, OrderSuccessRoutingModule],
  declarations: [OrderSuccessComponent]
})
export class OrderSuccessModule {}
