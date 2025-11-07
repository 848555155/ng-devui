import { Type } from "@angular/core";

export interface DevuiSourceData {
  title?: string;
  language?: string;
  code?: any;
}

export interface DevuiDemoData {
  anchor: string;
  name: string;
  title: string;
  noDescription?: boolean;
  description?: string;
  component: Type<any>;
  source: DevuiSourceData[];
}

export type DevuiDemosData = DevuiDemoData[];
