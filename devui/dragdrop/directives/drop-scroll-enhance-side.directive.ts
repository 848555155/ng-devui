import { Directive,  Input,  OnInit } from '@angular/core';
import { DropScrollEnhancedDirective } from './drop-scroll-enhance.directive';
import { DropScrollDirection } from './drop-scroll-enhance.type';

@Directive({
  selector: '[dDropScrollEnhancedSide]',
  standalone: false,
  exportAs: 'dDropScrollEnhancedSide'
})
export class DropScrollEnhancedSideDirective extends DropScrollEnhancedDirective implements OnInit {
  @Input('direction') sideDirection: DropScrollDirection = 'v';

  direction: DropScrollDirection;

  ngOnInit() {
    this.direction = this.sideDirection === 'v' ? 'h' : 'v';
  }
}
