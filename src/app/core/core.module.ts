import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'app/core/components/header/header.component';
import { HomeComponent } from 'app/core/components/home/home.component';
import { LoginComponent } from 'app/core/components/login/login.component';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
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
