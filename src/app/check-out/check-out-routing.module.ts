import { NgModule } from '@angular/core';
import { CheckOutComponent } from './check-out.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CheckOutComponent,
        children: []
      }
    ])
  ],
  exports: [RouterModule]
})
export class CheckOutRoutingModule {}
