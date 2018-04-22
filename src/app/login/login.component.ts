import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'gs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials: any;
  authenticationError: boolean;
  authErrorMessage: string;

  constructor(private authService: AuthService, private router: Router) {
    this.credentials = {};
    this.authErrorMessage = '';
  }

  ngOnInit() {}

  googleLogin() {
    this.authService.googleLogin();
  }

  emailLogin() {
    this.authService
      .emailLogin(this.credentials.email, this.credentials.password)
      .then(() => (this.authenticationError = false))
      .catch(error => {
        this.authenticationError = true;
        this.authErrorMessage = error;
      });
  }

  register() {
    this.router.navigate(['/register']);
  }
}
