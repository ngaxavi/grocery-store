import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, ProductsRoutingModule, SharedModule],
  declarations: [ProductsComponent, ProductFilterComponent]
})
export class ProductsModule {}
