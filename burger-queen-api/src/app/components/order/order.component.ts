import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  modalSwitch: boolean = false; 
  constructor(private modalSS:SwitchService) {

  }
  ngOnInit(){
    this.modalSS.$modal.subscribe((valor)=>{this.modalSwitch = valor})

  }
  openModal() {
    this.modalSwitch = true;
  }


}
