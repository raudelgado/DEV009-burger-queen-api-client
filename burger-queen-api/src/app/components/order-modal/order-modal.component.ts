import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss']
})
export class OrderModalComponent {
  clientName:string= '';
  constructor(private modalSS: SwitchService, private router: Router) {}

  saveClientName() {
    if (this.clientName.trim() !== '') {
      // Verifica que el nombre del cliente no esté vacío

      // Lógica para guardar el nombre del cliente, por ejemplo, llamando a un servicio
      this.modalSS.saveClientName(this.clientName);

      // Cierra el modal o realiza otras acciones necesarias
      this.router.navigate(['/Menu']);
    } else {
      // Muestra un mensaje de error o toma otra acción si el nombre está vacío
      alert('Please enter a valid customer name.');
    }
  
  }
  closeModal(){
      this.modalSS.$modal.emit(false)

  }

}
