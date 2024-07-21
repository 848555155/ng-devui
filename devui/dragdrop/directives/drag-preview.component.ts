import { CommonModule } from '@angular/common';
import {  ChangeDetectorRef, Component, ElementRef, inject, input, TemplateRef } from '@angular/core';

@Component({
  selector: 'd-drag-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drag-preview.component.html',
  preserveWhitespaces: false,
})
export class DragPreviewComponent {
  element = inject(ElementRef).nativeElement;
  data = input();
  draggedEl = input();
  dragData = input();
  batchDragData = input();
  dragSyncDOMElements = input();
  templateRef = input<TemplateRef<any>>();
  private cdr = inject(ChangeDetectorRef);

  public updateTemplate() {
    this.cdr.detectChanges();
  }

}
