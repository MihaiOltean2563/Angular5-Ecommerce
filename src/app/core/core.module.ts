import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'app/core/components/header/header.component';
import { HomeComponent } from 'app/core/components/home/home.component';
import { LoginComponent } from 'app/core/components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    NgbModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    LoginComponent,
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
