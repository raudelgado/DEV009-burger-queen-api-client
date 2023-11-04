import { Component } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css']
})
export class OrderModalComponent {

  constructor(private modalSS: SwitchService) {}

  closeModal(){
      this.modalSS.$modal.emit(false)

  }

}
