import { Component, OnInit } from '@angular/core';


import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignUpComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  signUp(): void {
    this.authService.signUp(this.user).subscribe(
      () => {
        console.log('is added')
        // Sign-up successful, redirect to sign-in page or desired page
      },
      error => {
        console.log('is not added',error)
        // Handle sign-up error, e.g., display error message
      }
    );
  }
}
