import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  inputText = 'Text Inicial Alterado';
  inputType = 'text';
  isDisabled = false;
  enableDisableInput() {
    this.isDisabled = !this.isDisabled;
  }
  setTextPassword() {
    this.inputType === 'text'
      ? (this.inputType = 'password')
      : (this.inputType = 'text');
  }

  logInputText() {
    console.log(this.inputText);
  }

  handleInputKeyup(event: KeyboardEvent) {
    const currentText = event.target as HTMLInputElement;
    console.log(currentText.value);
  }
  handleInputEvent(event: Event) {
    const currentText = event.target as HTMLInputElement;
    this.inputText = currentText.value;
  }
}
