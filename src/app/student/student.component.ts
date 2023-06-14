import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
})
export class StudentComponent {
  student = {
    name: 'Eric',
    lastname: 'Suarez',
    carrer: 'IEVN'
  }
}
