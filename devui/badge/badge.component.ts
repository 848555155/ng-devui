import { booleanAttribute, Component, computed, ElementRef, input, numberAttribute, viewChild } from '@angular/core';
import { BadgePositionType, BadgeStatusType } from './badge.types';

@Component({
  selector: 'd-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  contentProjection = viewChild<ElementRef<HTMLSpanElement>>('contentProjection');
  hasContent = computed(() => {
    const nodes = this.contentProjection()?.nativeElement;
    const contents = nodes.childNodes;
    return !!contents.length;
  });
  count = input<number | string>();
  maxCount = input(99, { transform: numberAttribute });
  showDot = input(false, { transform: booleanAttribute });
  status = input<BadgeStatusType>();
  position = input<BadgePositionType>('top-right');
  offset = input<[number, number]>();
  bgColor = input<string>();
  textColor = input<string>();
  computedCountToNumber = computed(() => {
    const count = this.count();
    if (typeof count === 'number') {
      return count;
    } else {
      const parseNumber = parseInt(count);
      return isNaN(parseNumber) ? -1 : parseNumber;
    }
  });
}
