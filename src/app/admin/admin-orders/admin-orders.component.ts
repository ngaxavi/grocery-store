import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrderService } from '@core/order.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'gs-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnDestroy {
  orders;
  showSpinner = true;
  subscription: Subscription;
  constructor(private orderService: OrderService) {
    this.subscription = this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
      this.showSpinner = false;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
