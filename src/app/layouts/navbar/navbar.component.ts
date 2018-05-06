import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { User } from '../../models/user';
import { ShoppingCartService } from '../../core/shopping-cart.service';
import { ShoppingCartItem } from '../../models/shopping-cart-item';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../../models/shopping-cart';

@Component({
  selector: 'gs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed: boolean;
  currentUser: User;
  cart$: Observable<ShoppingCart>;

  constructor(private authService: AuthService, private cartService: ShoppingCartService) {
    this.isNavbarCollapsed = true;
  }

  async ngOnInit() {
    this.authService.currentUser.subscribe(user => (this.currentUser = user));

    this.cart$ = (await this.cartService.getCart())
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
      .map(items => {
        return new ShoppingCart(items);
      });
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  isAdmin(): boolean {
    return this.authService.hasAdminRole(this.currentUser);
  }

  logout() {
    this.authService.logout();
  }
}
