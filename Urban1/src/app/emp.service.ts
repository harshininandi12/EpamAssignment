import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClientModule, HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmpService {
  flag : boolean;
  itemToPublish: Subject<any>;
  orders = [];
  cartItems = [];
  constructor(private httpClient: HttpClient) { 
    this.itemToPublish = new Subject();
  }
  displayInCart(order: any) {
    this.orders = order;
  }

  getToDisplayInCart() {
    return this.orders;
  }
  
  getToCart() {
    return this.itemToPublish.asObservable();
  }
  
  addToCart(order : any) {
   this.itemToPublish.next(order);
   this.cartItems.push(order);
  }
  setUserLoggedIn() {
    this.flag = true;
  }
  setUserLoggedOut() {
    this.flag = false;
  }
  getUserLoggedIn() : boolean {
    return this.flag;
  }
  registerCus(customer: any) {
    console.log('Inside service...', ' ', customer);
    return this.httpClient.post('RestAPIH/webapi/urbanresources/registerJ', customer)
  }
  registerProf(professional : any) {
    return this.httpClient.post('RestAPIH/webapi/urbanresources/registerP', professional);
  }
  getEmpByUserPass(loginId: string, password: string): any {
    console.log('Inside service:' , loginId, password);
    return this.httpClient.get('RestAPI/webapi/myresource/getEmpByUserPass/' + loginId + '/' + password).toPromise();
    }
}
