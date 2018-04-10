import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './my-orders.component';
import { MyOrdersRoutingModule } from './my-orders-routing.module';

@NgModule({
  imports: [CommonModule, MyOrdersRoutingModule],
  declarations: [MyOrdersComponent]
})
export class MyOrdersModule {}
