import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user';

@Component({
  selector: 'gs-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  confirmPassword: string;
  doNotMatch: string;
  error: string;
  errorMessage: string;
  registerAccount: any;
  success: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.success = false;
    this.registerAccount = {};
  }

  openLogin() {
    this.router.navigate(['login']);
  }

  register() {
    if (this.registerAccount.password !== this.confirmPassword) {
      this.doNotMatch = 'ERROR';
    } else {
      this.doNotMatch = null;
      this.error = null;
      this.errorMessage = null;
      this.authService
        .emailSignUp(this.registerAccount.email, this.registerAccount.password)
        .then(user => {
          this.success = true;
          console.log(this.registerAccount.name);
          const data = {
            uid: user.uid,
            email: user.email,
            displayName: this.registerAccount.name,
            photoURL: user.photoURL
          };
          this.authService.updateUserData(data);
          // this.router.navigate(['login']);
        })
        .catch(error => {
          this.success = null;
          this.error = 'ERROR';
          this.errorMessage = error;
        });
    }
  }
}
