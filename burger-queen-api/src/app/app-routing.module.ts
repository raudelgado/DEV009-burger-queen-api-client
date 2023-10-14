import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  // { 
  //   path: '', 
  //   redirectTo: '/inicio', 
  //   pathMatch: 'full' 
  // },
  { 
    path: 'Login', component: LoginComponent 
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
