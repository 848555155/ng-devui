import { Injectable, Injector, Type } from '@angular/core';
import { OverlayContainerRef } from 'ng-devui/overlay-container';
import { assign } from 'lodash-es';
import { Message, ToastComponent } from './toast.component';

export interface IToastOptions {
  value?: Array<Message>;
  life?: number;
  lifeMode?: string;
  style?: object;
  styleClass?: string;
  sticky?: boolean;
  injector?: Injector;
  appendUpperLimit?: number;
  component?: Type<any>;
}

@Injectable()
export class ToastService {
  constructor(private overlayContainerRef: OverlayContainerRef) {}

  open({
    value,
    life = 5000,
    lifeMode = 'global',
    sticky = false,
    style,
    styleClass,
    appendUpperLimit,
    injector,
    /**
     * @deprecated
     */
    component,
  }: IToastOptions = {}) {
    const toastRef = this.overlayContainerRef.createComponent(
      ToastComponent,
      injector
    );
    assign(toastRef.instance, {
      lifeMode: lifeMode,
      sticky: sticky,
      style: style,
      styleClass: styleClass,
      value: value,
      life: life,
      appendUpperLimit: appendUpperLimit,
    });

    toastRef.instance.close = (index?: number | Message) => {
      if (typeof index === 'number' && index > -1) {
        toastRef.instance.removeIndexThrottle(index);
      } else if (index) {
        toastRef.instance.removeMsgThrottle(index);
      } else {
        setTimeout(() => {
          toastRef.instance.removeAll();
          setTimeout(() => {
            if (toastRef) {
              toastRef.destroy();
            }
          }, 300);
        });
      }
    };

    toastRef.instance.onHidden = () => {
      if (toastRef?.hostView) {
        toastRef.hostView.destroy();
      }
    };

    toastRef.instance.show();
    return {
      toastInstance: toastRef.instance,
    };
  }
}
