import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, ShoppingCartRoutingModule, SharedModule],
  declarations: [ShoppingCartComponent]
})
export class ShoppingCartModule {}
