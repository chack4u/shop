import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  constructor(private db: AngularFireDatabase) {

   }


  getCategory(){
    return this.db.list('categories').valueChanges();
  }
}
