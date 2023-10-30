import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent {
  constructor(private router: Router) {}

  goToMenu() {
    this.router.navigate(['/Menu']);
  }

}
