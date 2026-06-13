import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-button-primary',
  templateUrl: './primary.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PrimaryComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
