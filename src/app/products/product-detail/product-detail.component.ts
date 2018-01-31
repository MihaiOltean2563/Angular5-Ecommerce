import { Component, OnInit } from '@angular/core';
import { Product } from 'shared/models/product';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'app/shared/services/products.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireObject, AngularFireList } from 'angularfire2/database/interfaces';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product = {};
  id;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private db: AngularFireDatabase) {
                this.id = this.route.snapshot.paramMap.get('id');
                
                if(this.id) {
                this.productService
                  .get(this.id)
                  .take(1)
                  .subscribe( p => this.product = p)
                  console.log("product in detail:", this.product);
                }
              }

 

  ngOnInit() {
  }


}
