import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { CustLoginComponent } from './cust-login/cust-login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SellerCreateComponent } from './seller-create/seller-create.component';
import { SellerAllComponent } from './seller-all/seller-all.component';
import { SellerEditComponent } from './seller-edit/seller-edit.component';
import { SellerDetailsComponent } from './seller-details/seller-details.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerAllComponent } from './customer-all/customer-all.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SellerLoginComponent,
    CustLoginComponent,
    RegistrationComponent,
    SellerCreateComponent,
    SellerAllComponent,
    SellerEditComponent,
    SellerDetailsComponent,
    CustomerCreateComponent,
    CustomerAllComponent,
    CustomerEditComponent,
    CustomerDetailsComponent,
    ProductsComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
