import { ChangeDetectionStrategy, Component, computed, ElementRef, input, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { BadgePositionType, BadgeStatusType } from './badge.types';

@Component({
  selector: 'd-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent {
  hasContent = computed(() => (this.contentProjection()?.nativeElement.childNodes.length ? true : false));
  contentProjection = viewChild<ElementRef<HTMLSpanElement>>('contentProjection');
  count = input<number | string>();
  maxCount = input(99);
  showDot = input(false, {
    transform: coerceBooleanProperty,
  });
  status = input<BadgeStatusType>();
  position = input<BadgePositionType>('top-right');
  offset = input<[number, number]>();
  bgColor = input<string>();
  textColor = input<string>();

  parseCountToNumber = computed(() => {
    const count = this.count();
    if (typeof count === 'number') {
      return count;
    } else {
      const parseNumber = parseInt(count);
      return isNaN(parseNumber) ? -1 : parseNumber;
    }
  });
}
