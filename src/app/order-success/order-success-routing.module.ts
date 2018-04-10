import { NgModule } from '@angular/core';
import { OrderSuccessComponent } from './order-success.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: OrderSuccessComponent,
        children: []
      }
    ])
  ],
  exports: [RouterModule]
})
export class OrderSuccessRoutingModule {}
