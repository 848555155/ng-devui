import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-delay',
  standalone: false,
  templateUrl: './delay.component.html',
  styleUrl: './delay.component.css',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class DelayComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
