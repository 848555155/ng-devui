import { Component, ElementRef, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ModalComponent } from 'ng-devui/modal';

@Component({
  selector: 'd-modal-content',
  standalone: false,
  templateUrl: './modal-content.component.html',
  styleUrl: './modal-content.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class ModalContentComponent implements OnInit {
  @Input() data: any;
  @Input() modalInstance: ModalComponent;

  constructor(private elr: ElementRef) {}

  parent: HTMLElement;

  ngOnInit() {
    this.parent = this.elr.nativeElement.parentElement;
    console.log(this.data);
  }

  close(event) {
    this.modalInstance.hide();
  }
}
