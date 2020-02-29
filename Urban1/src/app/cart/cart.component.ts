import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products : any;
cartItems = [];
  constructor(private service: EmpService) {
    this.cartItems = this.service.cartItems;
   }

  ngOnInit() {
    this.products = this.service.getToDisplayInCart();
  }

}


