import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../core/shopping-cart.service';

@Component({
  selector: 'gs-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss']
})
export class ProductQuantityComponent {
  @Input() product;
  @Input() shoppingCart;

  constructor(private cartService: ShoppingCartService) {}

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }
}
