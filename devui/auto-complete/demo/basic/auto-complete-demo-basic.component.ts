import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-auto-complete-demo-basic',
  templateUrl: './auto-complete-demo-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AutoDemoBasicComponent {
  selectItem0: any;
  languages = [
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
