import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AuthInterceptor } from './services/auth.interceptor';
import { AuthGuard } from './services/auth.guard';
import { LoggedInAuthGuard } from './services/loggedin.guard';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,AppRoutingRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [
    LoggedInAuthGuard,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [ AppComponent ]

})
export class AppModule { }
