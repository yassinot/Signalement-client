import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {  Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const AUTH_API = environment.api_url;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  constructor(private http: HttpClient ,private router:Router) {}

  signUp(user: any): Observable<any> {
    return this.http.post(`${AUTH_API}/auth/signup`, user);
  }

  signIn(credentials: any): Observable<any> {
    return this.http.post(`${AUTH_API}/auth/signin`, credentials,{responseType: 'text'}).pipe(
      tap((response :any)=> {
        console.log(response)
        // Store the JWT token in local storage
        localStorage.setItem('token', response);
      })
    );
  }

  signOut(): void {
    // Clear the token from local storage
    localStorage.removeItem('token');
    this.router.navigate(['/auth/signin']);
  }

  isLoggedIn(): boolean {
    // Check if the token exists in local storage
    return !!localStorage.getItem('token');
  }
}
