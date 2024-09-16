import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() title: string = '';
  @Output() titleChange = new EventEmitter<string>();
  @Output() generateNewTitle = new EventEmitter();

  generateRandomChildTitle() {
    this.title = Math.random().toString() + 'child';
    this.titleChange.emit(this.title);
  }

  setNewTitle() {
    this.generateNewTitle.emit();
  }
}
