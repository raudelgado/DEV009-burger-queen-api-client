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
  errorMessage = ''; // Declaración de la variable 'errorMessage'

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    const email = this.user.email;
    const password = this.user.password;

    // Verificar si el correo electrónico y la contraseña están vacíos
    if (!email || !password) {
      console.error('El correo electrónico y la contraseña son obligatorios.');
      return;
    }

    this.loginService.login(email, password).subscribe(
      (response: LoginAuth) => {
        console.log('Respuesta de inicio de sesión:', response);
        const accessToken = response.accessToken;
        localStorage.setItem('accessToken', accessToken);

        this.router.navigate(['/New Order']);
      },
      (error) => {
        console.error('Error de inicio de sesión', error);

        // Mostrar un mensaje de error descriptivo al usuario
        if (error.status === 401) {
          this.errorMessage = 'Correo electrónico o contraseña incorrectos.';
        } else {

          //TODOs Cambiar a ingles ..
          this.errorMessage = 'Error en el inicio de sesión. Credenciales Incorrectas. Por favor, inténtalo de nuevo.';
        }
      }
    );
  }
}
