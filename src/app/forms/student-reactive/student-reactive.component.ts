import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-reactive',
  templateUrl: './student-reactive.component.html',
  styleUrls: ['./student-reactive.component.css']
})
export class StudentReactiveComponent {
	studentForm: FormGroup;

	constructor(private readonly formBuilder: FormBuilder) {
		this.studentForm = this.initForm();
	}

	onSubmit(): void {
		this.getData();
	}

	getData() {
		const id = this.studentForm.get('id')?.value;
		console.log('id', id);
		const name = this.studentForm.get('name')?.value;
		console.log('name', name);
	}

	initForm() {
		return this.formBuilder.group({
			id: ['', [Validators.required, Validators.minLength(5)]],
			name: ['', [Validators.required, Validators.minLength(3)]],
			age: ['', Validators.required],
			email: ['', Validators.required],
			photo: [''],
			note: ['', Validators.required],
		});
	}
}
