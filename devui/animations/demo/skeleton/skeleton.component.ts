import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'd-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonComponent {}
