import { Component } from '@angular/core';

@Component({
  selector: 'app-operasbas',
  templateUrl: './operasbas.component.html',
  styleUrls: ['./operasbas.component.css'],
})
export class OperasbasComponent {
  first: number = 0;
  second: number = 0;
  result: number = 0;
  selected = 'plus';
  typesOperations = {
    plus: '+',
    less: '-',
    mulply: '*',
    divide: '/'
  } as { plus: string, less: string,  mulply: string,  divide: string, };

  calculate() {
    //let some = this.typesOperations[`${this.selected}`];
    //return `${this.first} ${  } ${this.second}`;
  }
}
