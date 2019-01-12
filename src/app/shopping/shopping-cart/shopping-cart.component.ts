import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '@core/shopping-cart.service';
import { ShoppingCart } from '@shared/models/shopping-cart';
import { map } from 'rxjs/operators';

@Component({
  selector: 'gs-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cart$;
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

  clearCart() {
    this.cartService.clearCart();
  }
}
