import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsList } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private urlApi = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductsList[]> {
    return this.http.get<ProductsList[]>(this.urlApi + '/products');
  }
  }
  

