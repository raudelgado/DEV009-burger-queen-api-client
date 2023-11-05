import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { MenuViewComponent } from './views/menu-view/menu-view.component';
import { OrderViewComponent } from './views/order-view/order-view.component';
import { OrderModalComponent } from './components/order-modal/order-modal.component';

const routes: Routes = [
  { 
    path: 'Login', component: LoginViewComponent
  },
  {
    path: 'New Order', component: OrderViewComponent
  },
  {
    path: 'Order-modal', component: OrderModalComponent
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
