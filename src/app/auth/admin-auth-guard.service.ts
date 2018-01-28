import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from 'app/auth/auth.service';
import { UserService } from 'app/auth/user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGuard implements CanActivate{

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
     return this.auth.user$
      .map(appUser => {
        // appUser.isAdmin
        return appUser.displayName === 'mike';
      })
  }
}
