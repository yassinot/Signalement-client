import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignalementListComponent } from './signalement-list/signalement-list.component';
import { AuthGuard  } from "../services/auth.guard";


const routes: Routes = [
  { path: '', component: SignalementListComponent,canActivate:[AuthGuard] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalemenhRoutingModule { }
