import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'signalement',
        loadChildren: () => import('./signalements/signalement.module').then(m => m.SignalementModule)
      },
      {
        path: '**',  redirectTo: 'signalement', pathMatch: 'full'
       
      
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
