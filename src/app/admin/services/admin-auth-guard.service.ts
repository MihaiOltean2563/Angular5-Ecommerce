import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from 'app/shared/services/auth.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGuard implements CanActivate{
  // user: Observable<boolean>;

  constructor(private auth: AuthService) { 

  }

  canActivate(): Observable<boolean> {
    return this.auth.user.map( user => {
      console.log("user: ", user);
      if(user['isAdmin']) return true;

      // this.router.navigate(['/login'], {
      //   queryParams: { returnUrl: state.url }
      // });
      return false;
    });
  }
}
