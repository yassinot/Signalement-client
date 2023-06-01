import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { LoggedInAuthGuard } from '../services/loggedin.guard';


const routes: Routes = [
  { path: 'signin', component: SignInComponent ,canActivate:[LoggedInAuthGuard]},
  { path: 'signup', component: SignUpComponent ,canActivate:[LoggedInAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
