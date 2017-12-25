import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'app/shared/category.service';
import { ProductService } from 'app/products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  
  constructor( 
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router) {
    this.categories$ = categoryService.getCategories();
   }

  ngOnInit() {
  }

  save(product){
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }
}
