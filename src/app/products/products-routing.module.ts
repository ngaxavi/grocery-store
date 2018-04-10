import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent,
        children: []
      }
    ])
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
