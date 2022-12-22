import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seller } from '../seller';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  seller!: Seller[];
  message!: string;

  constructor(private service: SellerService, private router: Router) { }

  ngOnInit(): void {
    this.getAllSeller();
  }

  getAllSeller() {
    return this.service.getAllSeller()
    .subscribe(
      data => {
        this.seller = data;
      }, error => {
        console.log(error);
      }
    );
  }

  deleteSeller(id: number) {
    if (confirm('Do you want to delete?')) {
      this.service.deleteOneSeller(id).subscribe(data => {
        this.message = data;
        this.getAllSeller();
      }, error => {
        console.log(error);
      });
    } else {
      this.message = '';
    }
  }

  detailsSeller(id: number) {
    this.router.navigate(['sellerdetails', id]);
  }

  // tslint:disable-next-line: typedef
  editSeller(id: number) {
    this.router.navigate(['selleredit', id]);
  }
}
