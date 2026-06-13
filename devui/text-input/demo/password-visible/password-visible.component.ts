import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-password-visible',
  standalone: false,
  templateUrl: './password-visible.component.html',
  styleUrl: './password-visible.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class PasswordVisibleComponent implements OnInit {
  constructor() {}

  showPassword = false;

  ngOnInit(): void {}
}
