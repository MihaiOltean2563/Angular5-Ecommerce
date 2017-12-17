import { AppUser } from 'app/models/app-user';
import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabase } from 'angularfire2/database';
import {
  AngularFireDatabase, 
  FirebaseListObservable, 
  FirebaseObjectObservable } 
from 'angularfire2/database-deprecated';

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';


@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User){
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    })
  }

  get(uid: string): FirebaseObjectObservable<AppUser>{
    return this.db.object('/users/'+ uid);
  }

}
