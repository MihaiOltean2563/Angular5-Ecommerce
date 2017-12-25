import { Component, OnInit } from '@angular/core';
import { ProductService,  } from 'app/products/products.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products$ : Observable<any[]>;
  private listRef = this.db.list('products');

  constructor(private productService: ProductService, private db: AngularFireDatabase) {

   }

  ngOnInit() {
    this.products$ = this.productService.getAll();
  }

}
