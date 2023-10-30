import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss']
})
export class OrderModalComponent {
  constructor(private modalService: ModalService) {
    this.modalService.modalOpen$.subscribe(() => this.openModal());
    this.modalService.modalClose$.subscribe(() => this.closeModal());
  }

  openModal() {
    console.log('se abre la modal')
    // Lógica para abrir la modal
  }

  closeModal() {
    // Lógica para cerrar la modal
  }
}


