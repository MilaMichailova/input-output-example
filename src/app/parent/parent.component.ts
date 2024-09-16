import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  titleToChild = 'Tru-la-la';

  generateRandomTitle(): void {
    this.titleToChild = Math.random().toString() + 'parent';
  }
}
