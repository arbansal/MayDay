import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home/home-page/home-page.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { AuthRouterGuardService } from './services/router-guard/auth-router-guard.service';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent, canActivate: [AuthRouterGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
