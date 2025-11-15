import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostListener,
  inject,
  linkedSignal,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import { AccordionBaseLinkComponent } from './accordion-base-link-component.class';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'd-accordion-item-routerlink',
  imports: [RouterModule, NgTemplateOutlet],
  host: {
    '[class.devui-router-active]': 'routerLinkActivated()',
  },
  templateUrl: './accordion-item-routerlink.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class AccordionItemRouterlinkComponent extends AccordionBaseLinkComponent {
  routerLinkActiveDirective = viewChild(RouterLinkActive);
  routerLinkActivated = computed(() => !!(this.routerLinkActiveDirective() && this.routerLinkActiveDirective().isActive));
  private router = inject(Router);

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.disabled()) {
      this.accordion.linkItemClickFn({
        item: this.item(),
        parent: this.parent(),
        event: event,
      });
    }
  }

  path = computed(() => {
    if (this.link()) {
      const handelPath = (url: string) => {
        let path = url;
        const index = url.indexOf('?');
        if (index > -1) {
          path = url.slice(0, index);
        }
        return path;
      };
      return handelPath(this.link());
    } else {
      return undefined;
    }
  });
  queryParams = computed(() => {
    if (this.link()) {
      return this.router.parseUrl(this.link()).queryParams;
    } else {
      return undefined;
    }
  });
  fragment = computed(() => {
    if (this.link()) {
      return this.router.parseUrl(this.link()).fragment;
    } else {
      return undefined;
    }
  });
}
