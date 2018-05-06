import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../core/category.service';
import { Observable } from 'rxjs/Observable';
import { ProductService } from '../../core/product.service';
import { Category } from '../../models/category';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'gs-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  categories$: Observable<Category[]>;
  product: any = {};
  id;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    this.categories$ = this.categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.productService
        .get(this.id)
        .take(1)
        .subscribe(p => (this.product = p));
    }
  }

  save(product) {
    if (this.id) {
      this.productService.update(this.id, this.product);
    } else {
      this.productService.create(product);
    }
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product ?')) {
      return;
    }
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {}
}
