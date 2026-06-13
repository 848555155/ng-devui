import { Component, ElementRef, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'd-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ModalAlertComponent implements OnInit {
  constructor(private elr: ElementRef) {}
  parent: HTMLElement;
  @Input() data: any;
  ngOnInit() {
    this.parent = this.elr.nativeElement.parentElement;
  }

  close(event) {
    this.data.onClose(event);
  }
}
