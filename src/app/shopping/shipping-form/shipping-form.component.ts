import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Order } from '@shared/models/order';
import { ShoppingCart } from '@shared/models/shopping-cart';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { OrderService } from '@core/order.service';
import { AuthService } from '@core/auth.service';

@Component({
  selector: 'gs-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input() cart: ShoppingCart;

  shipping: any = {};
  userId: string;
  subscription: Subscription;

  constructor(private router: Router, private orderService: OrderService, private authService: AuthService) {}

  ngOnInit() {
    this.subscription = this.authService.user$.subscribe(user => (this.userId = user.uid));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async placeOrder() {
    const order = new Order(this.userId, this.shipping, this.cart);
    const result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.id]);
  }
}
