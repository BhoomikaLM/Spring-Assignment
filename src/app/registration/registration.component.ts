import { Component, OnInit } from '@angular/core';
import { Registration } from '../registration';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  register!: Registration;
  message!: string;

  // inject service class
  constructor(private service: SellerService) { }

  ngOnInit(): void {
    // when page is loaded clear form data
    this.register = new Registration();
  }

  // tslint:disable-next-line: typedef
  createRegister() {
    this.service.createRegister(this.register)
    .subscribe(data => {
      this.message = data; // read message
      this.register = new Registration(); // clear form
    }, error => {
      console.log(error);
    });
  }
}
