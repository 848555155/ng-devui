import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  Directive,
  input,
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
  host: {
    class: 'devui-card-actions',
    '[class.devui-card-actions-align-end]': 'align() === "end"',
    '[class.devui-card-actions-align-space-between]': 'align() === "spaceBetween"',
  },
  exportAs: 'dCardActions'
})
export class CardActionsDirective {
  readonly align = input<'start' | 'end' | 'spaceBetween'>('start');
}

@Directive({
  selector: '[dCardMeta]',
  host: {
    class: 'devui-card-meta',
  },
  exportAs: 'dCardMeta'
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
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'devui-card',
    '[class.devui-card-interactive]': 'interactive()',
  },
  exportAs: 'dCard'
})
export class CardComponent {
  readonly interactive = input(false, { transform: booleanAttribute });
}

@Component({
  selector: 'd-card-header',
  templateUrl: './card-header.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'devui-card-header',
  }
})
export class CardHeaderComponent {}

// waiting for design
@Component({
  selector: 'd-card-extend',
  templateUrl: './card-extend.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'devui-card-extend',
  }
})
export class CardExtendComponent {}
