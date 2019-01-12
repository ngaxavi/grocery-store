import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/auth.service';
import { OrderService } from '@core/order.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'gs-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  orders$;

  constructor(private authService: AuthService, private orderService: OrderService) {
    this.orders$ = authService.user$.pipe(switchMap(user => orderService.getOrdersByUser(user.uid)));
  }

  ngOnInit() {}
}
