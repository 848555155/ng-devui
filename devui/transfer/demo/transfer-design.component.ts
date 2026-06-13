import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-transfer-design',
  standalone: false,
  templateUrl: './transfer-design.component.html',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class TransferDesignComponent implements OnInit {
  imgSrc;
  constructor() {}

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
