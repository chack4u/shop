import { AppUser } from './../models/appUser';
import { Observable } from 'rxjs/Observable';
import { UserService } from './../user-service/user.service';
import { authService } from './../auth/auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

 

  constructor(private auth:authService,private userService:UserService) { }

  canActivate(){
    return  true;
  }
}
