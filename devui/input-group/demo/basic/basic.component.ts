import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-input-group-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class BasicComponent {
  duration: number;
  leftValue = 3;
  rightValue = 1;
  comparisonSymbol = '>';
  comparisonSymbols = ['>', '<', '='];
  userName = 'Administrators';
}
