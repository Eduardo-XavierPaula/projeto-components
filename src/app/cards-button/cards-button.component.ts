import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cards-button',
  templateUrl: './cards-button.component.html',
  styleUrl: './cards-button.component.scss',
})
export class CardsButtonComponent {
  @Output('buttonClick') buttonClickEmitter = new EventEmitter<boolean>();
  onButtonClick() {
    this.buttonClickEmitter.emit(true);
  }
}
