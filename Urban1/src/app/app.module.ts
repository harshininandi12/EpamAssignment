import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { ShowServicesComponent } from './show-services/show-services.component';
import { CartComponent } from './cart/cart.component';
import { RegisterProfComponent } from './register-prof/register-prof.component';
//import { KitchenCleaningComponent } from './kitchen-cleaning/kitchen-cleaning.component';
const appRoot: Routes = [{path:'', component:ShowServicesComponent},
                          {path:'showServices', component : ShowServicesComponent},
                          {path:'login', component :LoginComponent},
                         {path:'registerCust', component : RegisterComponent},
                         {path:'registerProf',  component : RegisterProfComponent},
                        {path:'cart',  component : CartComponent}];
                        // {path:'kitchenCleaning', component:KitchenCleaningComponent},
                       // {path:'showServices/kitchenCleaning', component:KitchenCleaningComponent}];
                        
 @NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
  
    ShowServicesComponent,
  
    CartComponent,
  
    RegisterProfComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoot)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
