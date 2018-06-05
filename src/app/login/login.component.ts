import { Component, OnInit } from '@angular/core';
import { AngularFireAuth }from 'angularfire2/auth'
import * as firebase from 'firebase'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
  constructor(private afAuth: AngularFireAuth) { }
  user: any;

  login(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.user = this.afAuth.auth.currentUser;
    console.log(this.user.displayName);
  }
  logout(){
    this.afAuth.auth.signOut();
  }

}
