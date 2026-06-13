import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-mention-toggle',
  templateUrl: './toggle.component.html',
  styles: [
    `
      d-button {
        margin-right: 8px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ToggleComponent {
  content = `before separator @C++ after separator`;
  mentionSeparator = ' ';
  mentionSeparatorToggle = { prefix: true, suffix: true };
  suggestions = [
    'C#',
    'C',
    'C++',
    'CPython',
    'Java',
    'JavaScript',
    'Go',
    'Python',
    'Ruby',
    'F#',
    'TypeScript',
    'SQL',
    'LiveScript',
    'CoffeeScript',
  ];
}
