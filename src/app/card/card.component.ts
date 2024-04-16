import { Component, Input, ViewEncapsulation } from '@angular/core';

interface IPlano {
  infos: IInfos;
}

interface IInfos {
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true }) planPrice: number = 0;

  private _planType: string = '';

  @Input() set planType(value: string) {
    this._planType = value.toUpperCase();
  }

  get planType(): string {
    return this._planType;
  }

  plano: IPlano = {
    infos: {
      tipo: 'Simples',
      preco: 100,
    },
  };

  buttonClicked(valueEmited: boolean) {
    console.log(valueEmited);
  }
}
