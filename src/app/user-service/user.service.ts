import { AppUser } from './../models/appUser';

import {FirebaseObjectObservable} from 'firebase/database'
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  d$: AngularFireObject<{}>;

  constructor(private db: AngularFireDatabase) {
  }

  save(user:firebase.User){
    this.db.object('/users/'+ user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  get(uid:string){
    return this.db.object('/users/'+ uid);

  }
  
  
}
