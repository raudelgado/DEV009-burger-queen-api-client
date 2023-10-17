import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './views/login-view/login-view.component';

const routes: Routes = [
  // { 
  //   path: '', 
  //   redirectTo: '/inicio', 
  //   pathMatch: 'full' 
  // },
  { 
    path: 'Login', component: LoginViewComponent
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
