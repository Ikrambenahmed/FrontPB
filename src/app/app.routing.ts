import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes =[
  {
    path: '/home',
    redirectTo: 'home'
  }, 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'Singup',
    component: SignUpComponent
  }, 
  {
    path: '',
    component: AdminLayoutComponent, canActivate : [AuthGuardService],
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  }
 
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
})
    
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
