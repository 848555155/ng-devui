import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-password-visible',
  templateUrl: './password-visible.component.html',
  styleUrls: ['./password-visible.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PasswordVisibleComponent implements OnInit {
  constructor() {}

  showPassword = false;

  ngOnInit(): void {}
}
