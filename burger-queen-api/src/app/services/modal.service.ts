import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalOpenSubject = new Subject<void>();
  private modalCloseSubject = new Subject<void>();

  modalOpen$ = this.modalOpenSubject.asObservable();
  modalClose$ = this.modalCloseSubject.asObservable();

  openModal() {
    this.modalOpenSubject.next();
  }

  closeModal() {
    this.modalCloseSubject.next();
}
  }