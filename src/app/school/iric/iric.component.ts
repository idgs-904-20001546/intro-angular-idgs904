import { Component } from '@angular/core';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {
	imageWidth: number = 50;
	imageHeight: number = 50;
	showImage: boolean = true;
	filterList: string = '';

	students: Iric[] = [
		{
			id: 234,
			name: 'Maria',
			age: 20,
			email: 'maria@gmail.com',
			payment: 130.34,
			image: 'https://th.bing.com/th/id/R.e0def738710ee062d439134225752d12?rik=KGk0u1rRV9WAaw&pid=ImgRaw&r=0'
		},
		{
			id: 324,
			name: 'Juan',
			age: 27,
			email: 'juan@gmail.com',
			payment: 350.34,
			image: 'https://famousage.com/wp-content/uploads/2022/08/Young-Miko.jpg'
		},
		{
			id: 533,
			name: 'Sasha',
			age: 31,
			email: 'sashaa@gmail.com',
			payment: 430.34,
			image: 'https://th.bing.com/th/id/OIP.f3M0G20PsO4512I_6iDJegHaE7?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
		},
	];
}
