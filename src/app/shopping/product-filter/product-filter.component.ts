import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '@core/category.service';

@Component({
  selector: 'gs-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {
  categories$;
  @Input() category;

  constructor(private categoryService: CategoryService) {
    this.categories$ = categoryService.getAll();
  }
}
