import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-register-cust',
  templateUrl: './register-cust.component.html',
  styleUrls: ['./register-cust.component.css']
})
export class RegisterComponent implements OnInit {
user:any;
constructor(private router:Router, private service:EmpService) { 
  this.user = {customerName:'',customerNumber:'', customerAddress:'', password:''};
}
showUser() {
  console.log(this.user);
  this.service.registerCus(this.user).subscribe();
}
  ngOnInit() {
  }

}
