import { booleanAttribute, Component, computed, ElementRef, input, numberAttribute, viewChild } from '@angular/core';
import { BadgePositionType, BadgeStatusType } from './badge.types';

@Component({
  selector: 'd-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  readonly contentProjection = viewChild<ElementRef<HTMLSpanElement>>('contentProjection');
  readonly hasContent = computed(() => {
    const nodes = this.contentProjection()?.nativeElement;
    const contents = nodes.childNodes;
    return !!contents.length;
  });
  readonly count = input<number | string>();
  readonly maxCount = input(99, { transform: numberAttribute });
  readonly showDot = input(false, { transform: booleanAttribute });
  readonly status = input<BadgeStatusType>();
  readonly position = input<BadgePositionType>('top-right');
  readonly offset = input<[number, number]>();
  readonly bgColor = input<string>();
  readonly textColor = input<string>();
  readonly computedCountToNumber = computed(() => {
    const count = this.count();
    if (typeof count === 'number') {
      return count;
    } else {
      const parseNumber = parseInt(count);
      return isNaN(parseNumber) ? -1 : parseNumber;
    }
  });
}
