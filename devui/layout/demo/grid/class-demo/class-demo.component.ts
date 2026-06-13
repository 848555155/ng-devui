import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-class-demo',
  standalone: false,
  templateUrl: './class-demo.component.html',
  styleUrl: './class-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ClassDemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
