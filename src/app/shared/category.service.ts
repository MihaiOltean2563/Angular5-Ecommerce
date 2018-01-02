import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  observableCategories$: Observable<any>;

  constructor(private db: AngularFireDatabase) {
        this.observableCategories$ = this.db.list('/categories', {
          query: {
            orderByChild: 'name'
          }
        });
   }

  getAll(){
    return this.observableCategories$;
  }
}
