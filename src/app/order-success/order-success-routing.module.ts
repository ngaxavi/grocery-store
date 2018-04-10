import { NgModule } from '@angular/core';
import { OrderSuccessComponent } from './order-success.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'order-success',
        component: OrderSuccessComponent,
        children: []
      }
    ])
  ],
  exports: [RouterModule]
})
export class OrderSuccessRoutingModule {}
