import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'app/shared/data-storage.service';
import { AuthService } from 'app/auth/auth.service';
import { AppUser } from 'app/models/app-user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  appUser: AppUser;
  
  constructor(
    private dataStorageService: DataStorageService,
    private auth: AuthService){
    auth.appUser$.subscribe(appUser => this.appUser = appUser)
  }


  ngOnInit() {
  }
  
  onSaveData(){}

  logout(){
    this.auth.logout();
  }

}
