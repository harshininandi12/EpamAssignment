import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-register-prof',
  templateUrl: './register-prof.component.html',
  styleUrls: ['./register-prof.component.css']
})
export class RegisterProfComponent implements OnInit {
   user:any;
   constructor(private router:Router, private service:EmpService) { 
    this.user = {profName:'',profAddress:'', qualification:'',profNumber:'',aadharNumber:'', password:'', service:'',};
  }
  show() {
    console.log(this.user);
    this.service.registerProf(this.user).subscribe();
  }

  ngOnInit() {
  }

}
