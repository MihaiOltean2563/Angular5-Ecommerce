import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService,  } from 'app/shared/services/products.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subscriber } from 'rxjs/Subscriber';
import { Product } from 'shared/models/product';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  products : Product[]= [];
  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;

  constructor(private productService: ProductService) {
    this.subscription =  
    
    productService.getAll()
    .subscribe(products => {
      this.products = products;
      this.initializeTable(products);
    });
  }

  private initializeTable(products: Product[]){
     //Initialize the data table
     this.tableResource = new DataTableResource(products);
     this.tableResource.query({offset: 0})
       .then(items => this.items = items);
     this.tableResource.count()
       .then(count => this.itemCount = count);
  }
  
  reloadItems(params){
    if(!this.tableResource) return;

    this.tableResource.query(params)  
      .then(items => this.items = items);
  }

  ngOnInit() {
    
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  filter(query: string){
    let filteredProducts = (query) ? 
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : 
      this.products;

    this.initializeTable(filteredProducts);
  }
  
}
