import { Component } from '@angular/core';
import { ModalService } from './../../services/modal.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  constructor(private modalService: ModalService) {}

  openModal() {
    this.modalService.openModal();
  }

  closeModal() {
    this.modalService.closeModal();
  }
}

