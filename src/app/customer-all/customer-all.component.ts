import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-customer-all',
  templateUrl: './customer-all.component.html',
  styleUrls: ['./customer-all.component.css']
})
export class CustomerAllComponent implements OnInit {
  customer!: Customer[];
  message!: string;

  constructor(private service: SellerService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getAllCustomer() {
    return this.service.getAllCustomer()
    .subscribe(
      data => {
        this.customer = data;
      }, error => {
        console.log(error);
      }
    );
  }

  deleteCustomer(id: number) {
    if (confirm('Do you want to delete?')) {
      this.service.deleteOneCustomer(id).subscribe(data => {
        this.message = data;
        this.getAllCustomer();
      }, error => {
        console.log(error);
      });
    } else {
      this.message = '';
    }
  }

  detailsCustomer(id: number) {
    this.router.navigate(['customerdetails', id]);
  }

  // tslint:disable-next-line: typedef
  editCustomer(id: number) {
    this.router.navigate(['customeredit', id]);
  }

}
