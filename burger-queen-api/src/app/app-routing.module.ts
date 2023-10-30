import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { MenuViewComponent } from './views/menu-view/menu-view.component';
import { OrderViewComponent } from './views/order-view/order-view.component';

const routes: Routes = [
  { 
    path: 'Login', component: LoginViewComponent
  },
  {
    path: 'New Order', component: OrderViewComponent
  },
  {
    path: 'Menu', component: MenuViewComponent
  },
  { 
      path: '', redirectTo: '/Login', pathMatch: 'full' 
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
