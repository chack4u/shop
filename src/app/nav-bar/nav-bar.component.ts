import { authService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { serializePath } from '@angular/router/src/url_tree';




@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  
  constructor(private AuthService: authService) { 

  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  
  ngOnInit() {
  }

  login(){
    this.AuthService.login();
  }
  logout(){
    this.AuthService.logout();
  }



}
