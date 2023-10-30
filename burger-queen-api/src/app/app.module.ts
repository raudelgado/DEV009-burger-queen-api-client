import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuViewComponent } from './views/menu-view/menu-view.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrderViewComponent } from './views/order-view/order-view.component';
import { OrderComponent } from './components/order/order.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginViewComponent,
    MenuViewComponent,
    MenuComponent,
    OrderViewComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
