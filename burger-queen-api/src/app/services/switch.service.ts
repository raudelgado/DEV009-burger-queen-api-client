import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {
  private modalState = new BehaviorSubject<boolean>(false);
  $modalSave = this.modalState.asObservable();

  private clientName: string | null = null;

  constructor() {}

  toggleModal(state: boolean) {
    this.modalState.next(state);
  }

  // Método para guardar el nombre del cliente
  saveClientName(clientName: string) {
    this.clientName = clientName;
  }

  // Método para obtener el nombre del cliente
  getClientName() {
    return this.clientName;
  }


  $modal = new EventEmitter<any>();
}
