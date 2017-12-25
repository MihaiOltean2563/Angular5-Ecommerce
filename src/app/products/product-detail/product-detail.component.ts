import { Component, OnInit } from '@angular/core';
import { Product } from 'app/products/product.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'app/products/products.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  product: Product;
  id: number;

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.product = this.productService.getProduct(this.id);
        }
      )
  }

  viewDetailed(){
    console.log(this.product);
  }


}
