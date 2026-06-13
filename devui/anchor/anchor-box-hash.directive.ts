import { AfterViewInit, booleanAttribute, Directive, inject, input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { debounceTime, filter } from 'rxjs/operators';
import { AnchorBoxDirective } from './anchor-box.directive';
import { AnchorLinkDirective } from './anchor-link.directive';
import { AnchorDirective } from './anchor.directive';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[dAnchorBox][dAnchorHashSupport]',
})
export class AnchorBoxHashSupportDirective implements AfterViewInit {
  readonly updateUrlWhenAnchorActive = input(true, { transform: booleanAttribute });
  readonly scrollToAnchorByHashOnlyInit = input(false, { transform: booleanAttribute });
  manual = false;

  private box = inject(AnchorBoxDirective);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  constructor() {
    this.box.activeChange
      .pipe(
        takeUntilDestroyed(),
        debounceTime(300),
        filter((anchor) => this.updateUrlWhenAnchorActive())
      )
      .subscribe(this.navigateToHash);

    this.router.events
      .pipe(
        takeUntilDestroyed(),
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe(this.navigateToAnchor);
  }

  ngAfterViewInit(): void {
    const frag = this.route.snapshot.fragment;
    setTimeout(() => {
      this.scrollToFragment(frag);
    }, 120);
  }

  navigateToHash = (targetAnchor: AnchorDirective) => {
    if (targetAnchor.activeChangeBy === 'initial') {
      return;
    }
    this.router.navigate([], { fragment: targetAnchor.anchor(), replaceUrl: true });
    this.manual = true;
  };

  navigateToAnchor = (event: NavigationEnd) => {
    if (this.manual) {
      this.manual = false;
      return;
    }
    if (this.scrollToAnchorByHashOnlyInit()) {
      return;
    }
    const frag = this.router.parseUrl(event.url).fragment;
    this.scrollToFragment(frag);
  };

  scrollToFragment = (frag: string) => {
    if (!frag) {
      return;
    }
    if (this.box.anchorMap[frag]) {
      const tempAnchor = new AnchorLinkDirective(this.box);
      tempAnchor.scrollToAnchorByName(frag, 'fragment');
    }
  };
}
