import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  @Input() note: number = 1;
  starWidth: number = 100;
  @Output() handleNote: EventEmitter<string> = new EventEmitter();
  onClick() {
    this.handleNote.emit(`${this.note}`);
  }
}
