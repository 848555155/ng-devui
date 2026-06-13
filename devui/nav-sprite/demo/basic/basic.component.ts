import { AfterViewInit, Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-demo-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class BasicComponent implements AfterViewInit {
  @ViewChild('navSprite', { static: true }) navSprite;

  ngAfterViewInit() {
    this.navSprite.getNavData();
  }
}
