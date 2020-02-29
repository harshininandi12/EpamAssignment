import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';
declare var toastr: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  constructor(private router:Router, private service:EmpService) { 
    this.user = {empId:'',password:''};
  }

  ngOnInit() {
  }
  async validateUser(loginForm: any) {
    console.log('Inside validateUser', loginForm.empId, loginForm.password);
    if (loginForm.empId === 'admin'  && loginForm.password === 'admin') {
      this.service.setUserLoggedIn();
      this.router.navigate(['products']);
    } else {
    await this.service.getEmpByUserPass(loginForm.empId, loginForm.password).then((data: any) => {
      if (data != null) {
      this.service.setUserLoggedIn();
      this.router.navigate(['products']);
      toastr.success('Login', 'Login Success');
    } else {
      toastr.success('Login', 'Login Failure');
    }
       },
       (error) => {
        toastr.success('Login', 'Login Failure');
        // this.router.navigate(['products']);
         });
     }
}

}
