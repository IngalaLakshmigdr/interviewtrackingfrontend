import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LoginComponent } from './home/login/admin-login';
import { AdminRegisterComponent } from './home/login/admin-register';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [


  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    LoginComponent,
    AdminRegisterComponent
    
  ],
  bootstrap: [/* your root component */]
})
export class AppModule {}
