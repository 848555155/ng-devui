import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  Directive,
  HostBinding,
  input,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Directive({
  selector: 'd-card-content, [dCardContent]',
  host: {
    class: 'devui-card-content',
  },
})
export class CardContentDirective {}

@Directive({
  selector: `d-card-title, [dCardTitle]`,
  host: {
    class: 'devui-card-title',
  },
})
export class CardTitleDirective {}

@Directive({
  selector: `d-card-subtitle, [dCardSubtitle]`,
  host: {
    class: 'devui-card-subtitle',
  },
})
export class CardSubtitleDirective {}

@Directive({
  selector: 'd-card-actions,[dCardActions]',
  exportAs: 'dCardActions',
  host: {
    class: 'devui-card-actions',
    '[class.devui-card-actions-align-end]': 'align() === "end"',
    '[class.devui-card-actions-align-space-between]': 'align() === "spaceBetween"',
  },
})
export class CardActionsDirective {
  align = input<'start' | 'end' | 'spaceBetween'>('start');
}

@Directive({
  selector: '[dCardMeta]',
  exportAs: 'dCardMeta',
  host: {
    class: 'devui-card-meta',
  },
})
export class CardMetaDirective {}

@Directive({
  selector: '[dCardAvatar]',
  host: {
    class: 'devui-card-avatar',
  },
})
export class CardAvatarDirective {}

@Component({
  selector: 'd-card',
  exportAs: 'dCard',
  host: {
    class: 'devui-card',
    '[class.devui-card-interactive]': 'interactive()',
  },
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  interactive = input(false, { transform: booleanAttribute });
}

@Component({
  selector: 'd-card-header',
  host: {
    class: 'devui-card-header',
  },
  templateUrl: './card-header.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardHeaderComponent {}

// waiting for design
@Component({
  selector: 'd-card-extend',
  host: {
    class: 'devui-card-extend',
  },
  templateUrl: './card-extend.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardExtendComponent {}
