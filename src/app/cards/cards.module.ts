import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardsButtonComponent } from '../cards-button/cards-button.component';
import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    CardComponent,
    CardsButtonComponent,
    CardButtonCancelComponent,
  ],
  imports: [CommonModule, MatSliderModule],
  exports: [CardComponent],
})
export class CardsModule {}
