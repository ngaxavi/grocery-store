import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '@core/product.service';
import { Product } from '@shared/models/product';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'gs-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  filteredProducts: Product[];
  subscription: Subscription;
  showSpinner = true;

  constructor(private productService: ProductService, private router: Router) {
    this.subscription = this.productService.getAll().subscribe(products => {
      this.filteredProducts = this.products = products;
      this.showSpinner = false;
    });
  }

  filter(query: string) {
    this.filteredProducts = query
      ? this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
      : this.products;
  }

  ngOnInit() {}

  editProduct(productId) {
    this.router.navigate(['/admin/products/', productId]);
  }
  deleteProduct(productId) {
    if (!confirm('Are you sure you want to delete this product ?')) {
      return;
    }
    this.productService.delete(productId);
    this.router.navigate(['/admin/products']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
