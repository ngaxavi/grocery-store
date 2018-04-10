import { NgModule } from '@angular/core';
import { MyOrdersComponent } from './my-orders.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'my-orders',
        component: MyOrdersComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class MyOrdersRoutingModule {}
