import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-alone-flex',
  standalone: false,
  templateUrl: './alone-flex.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class AloneFlexComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
