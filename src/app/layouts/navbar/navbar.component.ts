import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'gs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed: boolean;
  currentUser: User;

  constructor(private authService: AuthService) {
    this.isNavbarCollapsed = true;
    authService.currentUser.subscribe(user => (this.currentUser = user));
  }

  ngOnInit() {}

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  isAdmin(): boolean {
    return this.authService.hasAdminRole(this.currentUser);
  }

  logout() {
    this.authService.logout();
  }
}
