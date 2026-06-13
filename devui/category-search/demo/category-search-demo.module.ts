import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CategorySearchModule } from "ng-devui/category-search";
import { SelectModule } from "ng-devui/select";
import { DevUIApiComponent } from "ng-devui/shared/devui-api/devui-api.component";
import { DevUIApiModule } from "ng-devui/shared/devui-api/devui-api.module";
import { DevUICodeboxModule } from "ng-devui/shared/devui-codebox";
import { TranslatePipe } from "@ngx-translate/core";
import { DDemoNavModule } from "devui-commons/src/demo-nav/d-demo-nav.module";
import { AutoScrollComponent } from "./auto-scroll/auto-scroll.component";
import { BasicComponent } from "./basic/basic.component";
import { CategorySearchDemoComponent } from "./category-search-demo.component";
import { CategorySearchDesignComponent } from "./category-search-design.component";
import { ExtendComponent } from "./extend/extend.component";
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';
@NgModule({
  declarations: [
    CategorySearchDemoComponent,
    BasicComponent,
    ExtendComponent,
    AutoScrollComponent,
  ],
  imports: [
    TranslatePipe,
    CommonModule,
    DDemoNavModule,
    DevUICodeboxModule,
    DevUIApiModule,
    CategorySearchModule,
    SelectModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: "",
        redirectTo: "demo",
        pathMatch: "full",
      },
      {
        path: "design",
        component: CategorySearchDesignComponent,
      },
      {
        path: "demo",
        component: CategorySearchDemoComponent,
      },
      {
        path: "api",
        component: DevUIApiComponent,
        data: {
          "zh-cn": marked.parse(apiCn),
          "en-us": marked.parse(apiEn),
        },
      },
    ]),
  ],
})
export class CategorySearchDemoModule {}
