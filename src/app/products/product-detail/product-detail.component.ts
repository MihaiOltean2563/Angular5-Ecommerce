import { Component, OnInit } from '@angular/core';
import { Product } from 'app/models/product';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'app/products/products.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireObject, AngularFireList } from 'angularfire2/database/interfaces';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, AfterViewChecked {
  product = {};
  id;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private db: AngularFireDatabase) {
                this.id = this.route.snapshot.paramMap.get('id');
                console.log("id: ", this.id);
                
                if(this.id) {
                this.productService
                  .get(this.id)
                  .valueChanges()
                  .take(1)
                  .subscribe( p => this.product = p)
                  // console.log("Product loaded in product detail page: ", this.product);
                }
              }

 

  ngOnInit() {
  }
  ngAfterViewChecked() { 
    // console.log("Product loaded in product detail page: after view checked", this.product);
  }

}
