import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
orders = [];
user;
  constructor(private router:Router, private service:EmpService) {
    this.user={empId:'', password:''};
   }

  ngOnInit() {
    this.service.getToCart().subscribe(order => this.orders.push(order));
    this.service.displayInCart(this.orders);
  }
  showUser1() {
    
    this.service.setUserLoggedOut();
    this.router.navigate(['login']);
  }
  showUser() {
    console.log(this.user);
    if(this.user.empId === 'admin') {
      this.service.setUserLoggedIn();
      this.router.navigate(['showServices']);
    }
  }
}
