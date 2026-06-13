import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-basic',
  standalone: false,
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class BasicComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
