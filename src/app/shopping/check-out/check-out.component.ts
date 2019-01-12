import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../core/shopping-cart.service';
import { ShoppingCart } from '@shared/models/shopping-cart';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'gs-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
  cart$: Observable<ShoppingCart>;
  constructor(private cartService: ShoppingCartService) {}

  async ngOnInit() {
    this.cart$ = (await this.cartService.getCart()).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }),
      map(items => {
        return new ShoppingCart(items);
      })
    );
  }
}
