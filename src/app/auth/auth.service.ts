import { Observable } from 'rxjs/Observable';

import { AppUser } from './../models/appUser';
import { UserService } from './../user-service/user.service';
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase  from 'firebase';
import { serializePath } from '@angular/router/src/url_tree';
import { User, FirebaseAuth } from '@firebase/auth-types';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class authService {
  constructor(
    private afAuth: AngularFireAuth,
    private userService:UserService,) { 
  }

  user: User;
  userDetails: any;
  state$: any;
 
  ngOnInit() {
  }

  login(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(response=>{
      this.userService.save(response.user);
      this.user = this.afAuth.auth.currentUser;
     
    });
 
    
  }
  logout(){
    this.afAuth.auth.signOut();
    
  }

  isLogin(){
     return this.afAuth.idToken.map(user=> {
      if(user){
        return true;
      }else{
        alert("plese login")  
        return false
      }
      });
  }

 

}
