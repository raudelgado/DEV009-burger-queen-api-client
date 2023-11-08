import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

   // Método para obtener la lista de productos
   getProducts(): Observable<any[]> {
    const url = `${this.apiUrl}/products`;
    return this.http.get<any[]>(url);
  }



}
