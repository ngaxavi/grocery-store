import { Component, OnInit } from '@angular/core';
import { ProductService } from '@core/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@shared/models/product';
import { ShoppingCartService } from '@core/shopping-cart.service';
import { ShoppingCart } from '@shared/models/shopping-cart';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'gs-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  showSpinner = true;
  cart$: Observable<ShoppingCart>;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: ShoppingCartService
  ) {}

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

    this.populateProducts();
  }

  private populateProducts() {
    this.productService
      .getAll()
      .pipe(
        switchMap(products => {
          this.products = products;
          return this.route.queryParamMap;
        })
      )
      .subscribe(params => {
        this.category = params.get('category');
        this.applyFilter();
        this.showSpinner = false;
      });
  }

  private applyFilter() {
    this.filteredProducts = this.category ? this.products.filter(p => p.category === this.category) : this.products;
  }
}
