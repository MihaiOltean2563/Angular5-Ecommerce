import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

export interface Category{
  name: string
}

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase,
              private afs: AngularFirestore) {
   }

  getAll(){
    let categories: AngularFirestoreCollection<Category> = this.afs.collection('categories', ref => ref.orderBy('name'));
    let observableCategories$:Observable<Category[]> = categories.valueChanges();
    return observableCategories$;
  }
}
