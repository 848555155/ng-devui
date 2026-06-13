import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-modal-design',
  standalone: false,
  templateUrl: './modal-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ModalDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
