import { NgModule } from '@angular/core';
import { CheckOutComponent } from './check-out.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../core/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'check-out',
        component: CheckOutComponent,
        children: [],
        canActivate: [AuthGuard]
      }
    ])
  ],
  exports: [RouterModule]
})
export class CheckOutRoutingModule {}
