import { Component, OnInit } from '@angular/core';


import { AuthService } from '../../services/auth.service';
import {  Router } from "@angular/router";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SignInComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private router: Router,private authService: AuthService) {}

  signIn(): void {
    this.authService.signIn(this.credentials).subscribe(
      () => {
        console.log("yessssssssssss")
        this.router.navigate(['/signalement']);
        // Sign-in successful, redirect to home or desired page
      },
      error => {
        // Handle sign-in error, e.g., display error message
        console.log("nooooooooooooooooo",error)

      }
    );
  }
}

