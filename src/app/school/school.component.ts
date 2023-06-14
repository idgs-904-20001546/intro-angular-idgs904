import { Component } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
})
export class SchoolComponent {
  title = 'intro-angular-idgs904';
  student = {
    birthdate: new Date(),
    payment: 2_200
  }
}
