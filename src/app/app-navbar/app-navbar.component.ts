import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss'],
})
export class AppNavbarComponent implements OnInit {
  constructor(router: Router) {}

  ngOnInit(): void {
    console.log(window.location.pathname);
  }

  isExpanded: boolean = false;

  toggleChange() {
    this.isExpanded = !this.isExpanded;
  }
}
