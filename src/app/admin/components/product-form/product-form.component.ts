import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'app/shared/services/category.service';
import { ProductService } from 'app/shared/services/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import { Product } from 'shared/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product = {};
  id;
  
  constructor( 
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {

    //get categories observable
    this.categories$ = categoryService.getAll();

    //get id observable
    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id) this.productService
    .get(this.id)
    .take(1)
    .subscribe( p => {
      this.product = p;
    })
   }

  ngOnInit() {}

  save(product){
    if(this.id) {
      this.productService.update(this.id, product);
    }else{
      this.productService.create(product);
    }
    this.router.navigate(['/admin/products']);
  }

  delete(){
    if(!confirm('Are you sure you want to delete this product?')) return;
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }
}
