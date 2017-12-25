import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'app/shared/category.service';
import { ProductService } from 'app/products/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product = {};

  constructor( 
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {

    this.categories$ = categoryService.getCategories();
    let id = this.route.snapshot.paramMap.get('id');

    if(id) this.productService
    .get(id)
    .valueChanges()
    .take(1)
    .subscribe( p => this.product = p)
    console.log("Product loaded: ", this.product);
   }

  ngOnInit() {
  }

  save(product){
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }
}
