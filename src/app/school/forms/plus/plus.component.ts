import { Component } from '@angular/core';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.css']
})
export class PlusComponent {
  first = '';
  second = '';
  result: number = 0;

  plus() {
    this.result = parseInt(this.first) + parseInt(this.second);
  }
}
