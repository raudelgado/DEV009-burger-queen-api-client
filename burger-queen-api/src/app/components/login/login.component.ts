import { LoginService } from './../../services/login.service';
import { LoginAuth } from 'src/app/interfaces/login-auth';
import { Component } from '@angular/core';

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
  constructor (private loginService: LoginService) {}

  login() {
    const email = this.user.email; // Definir email
    const password = this.user.password; // Definir password

    this.loginService.login(email, password).subscribe(
      (response: LoginAuth) => {
        // Puedes acceder a propiedades específicas de la respuesta de manera segura.
        const accessToken = response.accessToken;
        const userEmail = response.user.email;
        // ...
      },
      (error) => {
        console.error('Error de inicio de sesión', error);
      }
    );
  }
}