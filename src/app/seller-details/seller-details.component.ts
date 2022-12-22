import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seller } from '../seller';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-seller-details',
  templateUrl: './seller-details.component.html',
  styleUrls: ['./seller-details.component.css']
})
export class SellerDetailsComponent implements OnInit {
id!: number;
seller!: Seller;
  constructor(private route: ActivatedRoute, private sellerServie: SellerService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.seller = new Seller();
    this.sellerServie.getOneSeller(this.id).subscribe( data => {
      this.seller = data;
    })
  }

}
