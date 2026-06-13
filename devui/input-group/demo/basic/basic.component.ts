import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-input-group-basic',
  standalone: false,
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class BasicComponent {
  duration: number;
  leftValue = 3;
  rightValue = 1;
  comparisonSymbol = '>';
  comparisonSymbols = ['>', '<', '='];
  userName = 'Administrators';
}
