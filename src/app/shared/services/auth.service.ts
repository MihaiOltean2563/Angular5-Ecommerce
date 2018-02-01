import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from 'shared/models/app-user';
import 'rxjs/add/operator/switchMap';
import { UserBasketService } from 'app/shared/services/user-basket.service';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

interface User {
  uid: string;
  email: string;
  displayName?: string;
}

@Injectable()
export class AuthService {

  user: Observable<User>;
  
   constructor(
    private afAuth: AngularFireAuth, 
    private route: ActivatedRoute,
    private router: Router,
    private cartService: UserBasketService,
    private afs: AngularFirestore) {

      this.user = this.afAuth.authState
      .switchMap(user => {
        if(user){
          return this.afs.collection('users').doc(user.uid).valueChanges();
        }else{
          return Observable.of(null);
        }
      })
    }

    

  login(){
    const provider = new firebase.auth.GoogleAuthProvider();
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user)
      })
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.collection('users').doc(user.uid);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    }
    return userRef.set(data)
  }

  logout(){
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
  });
  }
 
}
