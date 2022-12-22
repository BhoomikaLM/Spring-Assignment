import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  id!: number;
  customer!: Customer;

  // inject service and acivated Route param
  constructor(private service: SellerService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // read id sent by all component as /edit/id
    // tslint:disable-next-line: no-string-literal
    this.id = this.activatedRoute.snapshot.params['id'];
    // make service call to get student object
    this.service.getOneCustomer(this.id).subscribe(
      data => {
      this.customer = data;
      console.log(this.customer);
    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line: typedef
  updateCustomer() {
    this.service.updateCustomer(this.id, this.customer)
    .subscribe( data => {
      console.log(data);
      this.router.navigate(['customergetall']);
    });
  }
}
