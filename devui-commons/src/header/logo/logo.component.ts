import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-header-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class LogoComponent implements OnInit {
  @Input() name = 'DevUI';
  @Input() link = '/home';

  constructor() {}

  ngOnInit() {}
}
