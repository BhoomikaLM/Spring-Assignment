import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  id!: number;
  customer!: Customer;
    constructor(private route: ActivatedRoute, private sellerServie: SellerService) { }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.customer = new Customer();
      this.sellerServie.getOneCustomer(this.id).subscribe( data => {
        this.customer = data;
      })
    }
  

}
