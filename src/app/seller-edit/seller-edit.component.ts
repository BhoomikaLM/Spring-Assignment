import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Seller } from '../seller';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-seller-edit',
  templateUrl: './seller-edit.component.html',
  styleUrls: ['./seller-edit.component.css']
})
export class SellerEditComponent implements OnInit {
  id!: number;
  seller!: Seller;

  // inject service and acivated Route param
  constructor(private service: SellerService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // read id sent by all component as /edit/id
    // tslint:disable-next-line: no-string-literal
    this.id = this.activatedRoute.snapshot.params['id'];
    // make service call to get student object
    this.service.getOneSeller(this.id).subscribe(
      data => {
      this.seller = data;
      console.log(this.seller);
    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line: typedef
  updateSeller() {
    this.service.updateSeller(this.id, this.seller)
    .subscribe( data => {
      console.log(data);
      this.router.navigate(['sellergetall']);
    });
  }

}
