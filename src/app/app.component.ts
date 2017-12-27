import { Component } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'app/auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService, router: Router, private userService: UserService){
    auth.user$.subscribe(
      user => {
        if(!user) return; 
        userService.save(user);

        let returnUrl = localStorage.getItem('returnUrl');
        if(!returnUrl) return;

        localStorage.remove('returnUrl');
        router.navigateByUrl(returnUrl);
          
      }
    )
  }
}
