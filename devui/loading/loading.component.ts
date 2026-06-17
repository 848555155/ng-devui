import { booleanAttribute, Component, computed, input, numberAttribute, TemplateRef } from '@angular/core';
import { LoadingStyle } from './loading.types';
import { NgTemplateOutlet } from '@angular/common';
@Component({
  selector: 'd-loading',
  imports: [NgTemplateOutlet],
  template: `<div class="devui-loading-wrapper" [class.devui-loading-full]="targetName() === 'BODY'" [style.zIndex]="zIndex()">
    <ng-container *ngTemplateOutlet="loadingTemplateRef() ?? default"> </ng-container>
    <ng-template #default>
      <div
        class="devui-spinner-wrapper"
        [class.devui-fix-loading-position]="!customPosition()"
        [class.devui-message-wrapper]="!!message()"
        [style.top]="top()"
        [style.left]="left()"
      >
        <div class="devui-busy-default-sign">
          @if (loadingStyle() === 'default') {
          <div class="devui-busy-default-spinner">
            <svg viewBox="25 25 50 50">
              <circle cx="50" cy="50" r="20" fill="none"></circle>
            </svg>
            <div class="devui-loading-dots">
              @for(spinner of spinners; track spinner) {
              <span><i></i></span>
              }
            </div>
          </div>
          } @if (loadingStyle() === 'infinity') {
          <div class="devui-infinity-loading-wrapper">
            <svg
              width="68px"
              height="34px"
              viewBox="0 0 68 34"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <linearGradient
                  x1="115.001687%"
                  y1="62.0561305%"
                  x2="5.52129005%"
                  y2="37.7390732%"
                  id="devui-container-loading-linearGradient"
                >
                  <stop stop-color="#299BFF" offset="0%"></stop>
                  <stop stop-color="#0064D6" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g id="Loading" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <g id="oldLoading" transform="translate(6.000000, 5.000000)" stroke-width="5">
                  <path
                    id="infinity-bg"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="M28.8273356,12.0651475 C34.9215537,4.0217158 40.200047,0 44.6627517,0 C51.4764195,0 57,5.5964615 57,12.4999677 C57,
                    19.4036031 51.4764195,25 44.6627517,25 C40.258896,25 35.0606745,21.0837108 29.0680872,13.2510678 L27.8765067,
                    11.6765806 C21.9073188,3.8921935 16.7275235,0 12.3372483,0 C5.52358054,0 0,5.5964615 0,12.4999677 C0,
                    19.4036031 5.52358054,25 12.3372483,25 C16.7979128,25 22.0734732,20.9820956 28.164057,
                    12.9462221 L28.8273356,12.0651475 Z"
                  ></path>
                  <path
                    stroke="url(#devui-container-loading-linearGradient)"
                    id="infinity-outline"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="M28.8273356,12.0651475 C34.9215537,4.0217158 40.200047,0 44.6627517,0 C51.4764195,0 57,5.5964615 57,12.4999677 C57,
                    19.4036031 51.4764195,25 44.6627517,25 C40.258896,25 35.0606745,21.0837108 29.0680872,13.2510678 L27.8765067,
                    11.6765806 C21.9073188,3.8921935 16.7275235,0 12.3372483,0 C5.52358054,0 0,5.5964615 0,12.4999677 C0,
                    19.4036031 5.52358054,25 12.3372483,25 C16.7979128,25 22.0734732,20.9820956 28.164057,
                    12.9462221 L28.8273356,12.0651475 Z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          } @if (!!message()) {
          <div class="devui-busy-default-text">{{ message() }}</div>
          }
        </div>
      </div>
    </ng-template>
  </div>`,
  styleUrl: './loading.component.scss',
  preserveWhitespaces: false
})
export class LoadingComponent {
  readonly loadingTemplateRef = input<TemplateRef<any>>();
  readonly message = input<string>();
  readonly top = input<string>();
  readonly left = input<string>();
  readonly customPosition = input(false, { transform: booleanAttribute });
  readonly target = input<Element>();
  readonly zIndex = input(undefined, { transform: numberAttribute });
  readonly loadingStyle = input<LoadingStyle>('default');
  spinners = new Array(12);
  readonly targetName = computed(() => this.target()?.nodeName);
  // Will overwrite this method in modal service
  close() {}
}
