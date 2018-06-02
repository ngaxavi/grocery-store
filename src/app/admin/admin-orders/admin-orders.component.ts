import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../core/order.service';

@Component({
  selector: 'gs-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {
  orders$;
  constructor(private orderService: OrderService) {
    this.orders$ = orderService.getOrders();
  }

  ngOnInit() {}
}
