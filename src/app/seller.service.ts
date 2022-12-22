import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seller } from './seller';
import { Registration } from './registration';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})

export class SellerService {

  private basePath = 'http://localhost:8095/rest/seller';
  private basePathRegister = 'http://localhost:8095/rest/register';
  private basePathCustomer = 'http://localhost:8095/rest/customer';

  constructor(private http: HttpClient) { }


  getAllSeller(): Observable<Seller[]> {
    return this.http.get<Seller[]>(`${this.basePath}/all`);
  }

  deleteOneSeller(id: number): Observable<any> {
    return this.http.delete(`${this.basePath}/remove/${id}`, {responseType: 'text'});
  }

  createSeller(seller: Seller): Observable<any> {
    return this.http.post(`${this.basePath}/save`, seller, {responseType: 'text'});
  }

  
  getOneSeller(id: number): Observable<Seller> {
    return this.http.get<Seller>(`${this.basePath}/one/${id}`);
  }

  updateSeller(id: number, seller: Seller): Observable<any> {
    return this.http.put(`${this.basePath}/modify/${id}`, seller, {responseType : 'text'});
  }

  createRegister(register: Registration): Observable<any> {
    return this.http.post(`${this.basePathRegister}/save`, register, {responseType: 'text'});
  }

  createCustomer(customer: Customer): Observable<any> {
    return this.http.post(`${this.basePathCustomer}/save`, customer, {responseType: 'text'});
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.basePathCustomer}/all`);
  }

  deleteOneCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.basePathCustomer}/remove/${id}`, {responseType: 'text'});
  }
  
  getOneCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.basePathCustomer}/one/${id}`);
  }

  updateCustomer(id: number, customer: Customer): Observable<any> {
    return this.http.put(`${this.basePathCustomer}/modify/${id}`, customer, {responseType : 'text'});
  }
}
