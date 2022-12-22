import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customer!: Customer;
  // message to ui
  message!: string;

  // inject service class
  constructor(private service: SellerService) { }

  ngOnInit(): void {
    // when page is loaded clear form data
    this.customer = new Customer();
  }

  // tslint:disable-next-line: typedef
  createCustomer() {
    this.service.createCustomer(this.customer)
    .subscribe(data => {
      this.message = data; // read message
      this.customer = new Customer(); // clear form
    }, error => {
      console.log(error);
    });
  }
}
