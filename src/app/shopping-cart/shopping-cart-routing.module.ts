import { NgModule } from '@angular/core';
import { ShoppingCartComponent } from './shopping-cart.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule {}
