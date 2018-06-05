import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  
  items: Observable<any[]>;

  constructor(
    private service: CategoryService ,
     private productService: ProductService , 
     private router:Router,
     private route: ActivatedRoute
    ) { 
    this.items =  this.service.getCategory ();

    let id = this.route.snapshot.paramMap.get('id');
    if (id) this.productService.creatProduct(id).then(function(snapshot) {
      //var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
       console.log(snapshot);
    });
  }



save(products){
  
  this.productService.creatProduct(products);
  this.router.navigate(['/admin/prodocts']);
}


  ngOnInit() {

  }

}
