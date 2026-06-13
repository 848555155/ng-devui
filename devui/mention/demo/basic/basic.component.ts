import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-mention-basic',
  standalone: false,
  templateUrl: './basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class BasicComponent {
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

  selectHandler(e) {
    console.log(e);
  }

  afterMentionInit(e) {
    console.log(e);
  }
}
