import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CustLoginComponent } from './cust-login/cust-login.component';
import { CustomerAllComponent } from './customer-all/customer-all.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { RegistrationComponent } from './registration/registration.component';
import { SellerAllComponent } from './seller-all/seller-all.component';
import { SellerCreateComponent } from './seller-create/seller-create.component';
import { SellerDetailsComponent } from './seller-details/seller-details.component';
import { SellerEditComponent } from './seller-edit/seller-edit.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';

const routes: Routes = [
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path: 'home',component:HomeComponent, pathMatch:'full'},
  {path: 'about', component:AboutComponent, pathMatch:'full'},
  {path: 'sellerLogin', component:SellerLoginComponent, pathMatch:'full'},
  {path: 'customerLogin', component:CustLoginComponent, pathMatch:'full'},
  {path: 'registration', component:RegistrationComponent, pathMatch:'full'},
  {path: 'sellercreate', component:SellerCreateComponent, pathMatch:'full'},
  {path: 'selleredit/:id', component:SellerEditComponent, pathMatch:'full'},
  {path: 'sellergetall', component:SellerAllComponent, pathMatch:'full'},
  {path: 'sellerdetails/:id', component:SellerDetailsComponent, pathMatch:'full'},
  {path: 'customercreate', component: CustomerCreateComponent, pathMatch:'full'},
  {path: 'customeredit/:id', component:CustomerEditComponent, pathMatch:'full'},
  {path: 'customergetall', component:CustomerAllComponent, pathMatch:'full'},
  {path: 'customerdetails/:id', component:CustomerDetailsComponent, pathMatch:'full'},
  {path: 'products', component:ProductsComponent, pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
