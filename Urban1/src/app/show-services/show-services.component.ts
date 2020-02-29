import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-show-services',
  templateUrl: './show-services.component.html',
  styleUrls: ['./show-services.component.css']
})
export class ShowServicesComponent implements OnInit {

  constructor(private router:Router, private service : EmpService) { }
  addToCart(product:any) {
    this.service.addToCart(product);
  }
  ngOnInit() {
  }

}
