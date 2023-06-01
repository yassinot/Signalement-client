import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  signUp(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/signup`, user);
  }

  signIn(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/signin`, credentials,{responseType: 'text'}).pipe(
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
  }

  isLoggedIn(): boolean {
    // Check if the token exists in local storage
    return !!localStorage.getItem('token');
  }
}
