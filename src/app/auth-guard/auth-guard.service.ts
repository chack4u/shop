import { Observable } from 'rxjs/Observable';
import { authService } from '../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterModule, RouterStateSnapshot } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: authService , private router:Router) { }

  canActivate(route,state: RouterStateSnapshot){
    
    return this.auth.isLogin();
 
  }
}
