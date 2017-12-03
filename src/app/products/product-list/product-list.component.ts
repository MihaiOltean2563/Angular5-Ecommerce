import { Component, OnInit } from '@angular/core';

import { DataStorageService } from 'app/shared/data-storage.service';
import { Response } from '@angular/http';
import { Product } from 'app/products/product.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {}
  private products: Product[];

  onSaveData(){
    console.log("Save triggered from product-list component!");
    this.dataStorageService.storeProducts()
      .subscribe(
        (response: Response) =>{
          console.log(response);
        }
      );
  }
}
