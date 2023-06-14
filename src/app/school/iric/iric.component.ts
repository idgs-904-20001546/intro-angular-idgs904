import { Component } from '@angular/core';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {
	students = [
		{
			id: 234,
			name: 'Maria',
			age: 20,
			email: 'maria@gmail.com',
			payment: 130.34,
			image: ''
		},
		{
			id: 324,
			name: 'Juan',
			age: 27,
			email: 'juan@gmail.com',
			payment: 350.34,
			image: ''
		},
		{
			id: 533,
			name: 'Sasha',
			age: 31,
			email: 'sashaa@gmail.com',
			payment: 430.34,
			image: ''
		},
	];
}
