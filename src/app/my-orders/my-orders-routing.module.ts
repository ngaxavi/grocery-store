import { NgModule } from '@angular/core';
import { MyOrdersComponent } from './my-orders.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MyOrdersComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class MyOrdersRoutingModule {}
