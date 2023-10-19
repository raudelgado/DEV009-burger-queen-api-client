import { LoginService } from './../../services/login.service';
import { LoginAuth } from 'src/app/interfaces/login-auth';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };
  constructor (private loginService: LoginService, private router: Router) {}

  login() {
    const email = this.user.email; 
    const password = this.user.password; 
    console.log('se hizo click');
    this.loginService.login(email, password).subscribe(
      (response: LoginAuth) => {
        console.log('Respuesta de inicio de sesión:', response)
        const accessToken = response.accessToken;
        // const userEmail = response.user.email;
         localStorage.setItem('accessToken', accessToken);

         this.router.navigate(['/Menu']);
      },
      (error) => {
        console.error('Error de inicio de sesión', error);
      }
    );
  }
}