import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-auto-complete-demo-latest',
  templateUrl: './auto-complete-demo-latest.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AutoDemoLatestComponent {
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
  latestSource = ['LiveScript', 'CoffeeScript'];
}
