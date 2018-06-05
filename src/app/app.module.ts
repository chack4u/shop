import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { AdminGuardService } from './admin-guard/admin-guard.service';
import { UserService } from './user-service/user.service';
import { AuthGuardService } from './auth-guard/auth-guard.service';
import { authService } from './auth/auth.service';
import { environment } from './../environments/environment';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule }from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductsComponent } from './products/products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppingCartComponent,
    NavBarComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'Shopping-cart', component: ShoppingCartComponent },
      { path: 'products', component: ProductsComponent },
      
      { path: 'check-out', component: CheckOutComponent ,canActivate:[AuthGuardService]},
      { path: 'order-success', component: OrderSuccessComponent ,canActivate:[AuthGuardService]},
      { path: 'my/orders', component: MyOrderComponent,canActivate:[AuthGuardService] },
      
      { path: 'admin/products/new', component: ProductFormComponent ,canActivate:[AuthGuardService,AdminGuardService]},
      { path: 'admin/products/:id', component: ProductFormComponent ,canActivate:[AuthGuardService,AdminGuardService]},
      { path: 'admin/prodocts', component: AdminProductsComponent ,canActivate:[AuthGuardService,AdminGuardService]},
      { path: 'admin/orders', component: AdminOrdersComponent ,canActivate:[AuthGuardService]},
      { path: '**', component: HomeComponent },
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    authService,
    AuthGuardService,
    AdminGuardService,
    UserService,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
