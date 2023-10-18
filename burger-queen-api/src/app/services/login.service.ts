import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginAuth } from '../interfaces/login-auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlApi = 'http://localhost:8080/login';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<LoginAuth> {
    return this.http.post<LoginAuth>(this.urlApi, {
      email: email,
      password: password,
    });
  }
}