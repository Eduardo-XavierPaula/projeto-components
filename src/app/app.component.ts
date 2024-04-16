import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  cardPlanType = 'Simples';
  cardPlanPrice = 100;
  cardPlanTypeComplete = 'Completo';
  cardPlanPriceComplete = 250;

  // binding
  inputText = 'Text Inicial Alterado';
  inputType = 'text';
  isDisabled = false;
  buttonTitle = 'Titulo do botão';
  buttonDisable = false;

  widthButton1 = '110px';
  bgButton1 = 'aqua';
  widthButton2 = 130;

  stylesObj = {
    width: '160px',
    backgroundColor: 'grey',
  };
  stylesObj2 = {
    width: '160px',
    backgroundColor: 'yellow',
  };

  isRedButton = true;
  isGreenButton = true;

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

  onButtonClick() {
    this.buttonTitle = 'Titulo alterado';
    this.buttonDisable = !this.buttonDisable;
  }
  updateStyleObj() {
    this.stylesObj2.width = '170px';
    this.stylesObj2.backgroundColor = 'lightblue';
  }
  updateStyleObjCorrect() {
    this.stylesObj2 = {
      width: '170px',
      backgroundColor: 'lightblue',
    };
  }

  handlePlanType(text: string) {
    this.cardPlanType = text;
  }
}
