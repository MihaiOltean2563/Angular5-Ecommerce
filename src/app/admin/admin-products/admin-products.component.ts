import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService,  } from 'app/products/products.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subscriber } from 'rxjs/Subscriber';
import { Product } from 'app/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  products : Product[];
  filteredProducts: any[];

  constructor(private productService: ProductService) {
    this.subscription =  
    this.productService.getAll()
    .subscribe(products => {
      this.products = products;
      this.filteredProducts = this.products;
    });
  }
  
  ngOnInit() {
    
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  filter(query: string){
    this.filteredProducts = (query) ? 
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : 
      this.products;
  }

  

}
