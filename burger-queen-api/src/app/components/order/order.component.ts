import { Component } from '@angular/core';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  isModalOpen: boolean = false;
  clientName: string = '';

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveClientName() {
    // Aquí puedes guardar el nombre del cliente en una variable o realizar otras acciones necesarias
    console.log('Nombre del cliente:', this.clientName);
    this.closeModal();
  }
}

