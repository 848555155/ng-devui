import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-demo-basic',
  standalone: false,
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class BasicComponent implements AfterViewInit {
  @ViewChild('navSprite', { static: true }) navSprite;

  ngAfterViewInit() {
    this.navSprite.getNavData();
  }
}
