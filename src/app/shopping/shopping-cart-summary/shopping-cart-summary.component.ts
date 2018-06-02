import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCart } from '@shared/models/shopping-cart';

@Component({
  selector: 'gs-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.scss']
})
export class ShoppingCartSummaryComponent implements OnInit {
  @Input() cart: ShoppingCart;

  constructor() {}

  ngOnInit() {}
}