import { Component, OnInit } from '@angular/core';
import { Seller } from '../seller';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-seller-create',
  templateUrl: './seller-create.component.html',
  styleUrls: ['./seller-create.component.css']
})
export class SellerCreateComponent implements OnInit {
  seller!: Seller;
  // message to ui
  message!: string;

  // inject service class
  constructor(private service: SellerService) { }

  ngOnInit(): void {
    // when page is loaded clear form data
    this.seller = new Seller();
  }

  // tslint:disable-next-line: typedef
  createSeller() {
    this.service.createSeller(this.seller)
    .subscribe(data => {
      this.message = data; // read message
      this.seller = new Seller(); // clear form
    }, error => {
      console.log(error);
    });
  }

}
