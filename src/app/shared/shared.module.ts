import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { LoadingSpinnerComponent } from '@shared/loading-spinner/loading-spinner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductCardComponent, ProductQuantityComponent, LoadingSpinnerComponent],
  exports: [ProductCardComponent, ProductQuantityComponent, LoadingSpinnerComponent]
})
export class SharedModule {}
