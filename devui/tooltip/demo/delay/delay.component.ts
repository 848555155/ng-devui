import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class DelayComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
