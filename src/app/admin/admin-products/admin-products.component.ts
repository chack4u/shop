import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  //itemResource = new DataTableResource(persons);
  //items = [];
  //itemCount = 0;
  items;
  itemCount = 0;

  constructor(private productService: ProductService, afAuth: AngularFireAuth) {
    
    //afAuth.authState;
    //this.items = db.list('products').valueChanges();
    //this.itemCount = this.items.switchMap.length;

    this.items = productService.getAll();
  }


  ngOnInit() {
  }

}
