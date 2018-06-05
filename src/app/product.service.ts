import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }


getAll(){
  return  this.db.list('/products').valueChanges();
}
  
getProdoct(productId){
  
  return this.db.database.ref('/users/' + productId).once('value');
}
  creatProduct(product){debugger
  return  this.db.list('products/').push(product);
  }
}
