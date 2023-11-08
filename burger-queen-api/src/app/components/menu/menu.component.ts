import { Component, OnInit } from '@angular/core';
import { ProductsList } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  products: ProductsList[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
      console.log('Datos de productos recibidos:', data);
    });
  }

}
