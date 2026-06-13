import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-auto-complete-demo-dropdown',
  standalone: false,
  templateUrl: './auto-complete-demo-dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class AutoDemoDropdownComponent {
  selectItem1: any;
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
