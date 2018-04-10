import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed: boolean;

  constructor() {
    this.isNavbarCollapsed = true;
  }

  ngOnInit() {}

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
