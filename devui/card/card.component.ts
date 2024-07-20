import { ChangeDetectionStrategy, Component, Directive, HostBinding, input, Input, ViewEncapsulation } from '@angular/core';

@Directive({
  selector: 'd-card-content, [dCardContent]',
  standalone: true,
})
export class CardContentDirective {
  @HostBinding('class.devui-card-content') default = true;
}

@Directive({
  selector: `d-card-title, [dCardTitle]`,
  standalone: true,
})
export class CardTitleDirective {
  @HostBinding('class.devui-card-title') default = true;
}

@Directive({
  selector: `d-card-subtitle, [dCardSubtitle]`,
  standalone: true,
})
export class CardSubtitleDirective {
  @HostBinding('class.devui-card-subtitle') default = true;
}

@Directive({
  selector: 'd-card-actions,[dCardActions]',
  standalone: true,
  exportAs: 'dCardActions',
})
export class CardActionsDirective {
  align = input<'start' | 'end' | 'spaceBetween'>('start');
  @HostBinding('class.devui-card-actions') default = true;
  @HostBinding('class.devui-card-actions-align-end')
  get alignEnd() {
    return this.align() === 'end';
  }
  @HostBinding('class.devui-card-actions-align-space-between')
  get alignSpaceBetween() {
    return this.align() === 'spaceBetween';
  }
}

@Directive({
  selector: '[dCardMeta]',
  standalone: true,
  exportAs: 'dCardMeta',
})
export class CardMetaDirective {
  @HostBinding('class.devui-card-meta') default = true;
}

@Directive({
  selector: '[dCardAvatar]',
  standalone: true
})
export class CardAvatarDirective {
  @HostBinding('class.devui-card-avatar') default = true;
}

@Component({
  selector: 'd-card',
  standalone: true,
  exportAs: 'dCard',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @HostBinding('class.devui-card') default = true;
  interactive = input(false);
  @HostBinding('class.devui-card-interactive') get _interactive() {
    return this.interactive();
  }
}

@Component({
  selector: 'd-card-header',
  standalone: true,
  templateUrl: './card-header.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardHeaderComponent {
  @HostBinding('class.devui-card-header') default = true;
}

// waiting for design
@Component({
  selector: 'd-card-extend',
  standalone: true,
  templateUrl: './card-extend.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardExtendComponent {
  @HostBinding('class.devui-card-extend') default = true;
}
