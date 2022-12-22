import { Component, OnInit } from '@angular/core';
import { Seller } from '../seller';
import { SellerService } from '../seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-all',
  templateUrl: './seller-all.component.html',
  styleUrls: ['./seller-all.component.css']
})
export class SellerAllComponent implements OnInit {
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
