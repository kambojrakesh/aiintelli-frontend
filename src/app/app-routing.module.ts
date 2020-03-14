import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { RouteGuardService } from './_services/route-guard.service';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login',component : LoginComponent},
  {path: 'register',component : RegisterComponent},
  {path: 'welcome',component : WelcomeComponent, canActivate: [RouteGuardService]},  
  {path: 'devices',component : WelcomeComponent, canActivate: [RouteGuardService]},
  {path: 'logout',component : LogoutComponent, canActivate: [RouteGuardService]},
  {path: '**',component : ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
