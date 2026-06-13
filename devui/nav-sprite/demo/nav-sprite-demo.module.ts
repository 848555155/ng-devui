import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavSpriteModule } from "ng-devui/nav-sprite";
import { DevUIApiComponent } from "ng-devui/shared/devui-api/devui-api.component";
import { DevUIApiModule } from "ng-devui/shared/devui-api/devui-api.module";
import { DevUICodeboxModule } from "ng-devui/shared/devui-codebox";
import { TranslateModule } from "@ngx-translate/core";
import { DDemoNavModule } from "devui-commons/src/demo-nav/d-demo-nav.module";
import { BasicComponent } from "./basic/basic.component";
import { NavSpriteDesignComponent } from "./nav-sprite-design.component";
import { ScrollContainerComponent } from "./scroll-container/scroll-container.component";
import { NavSpriteDemoComponent } from "./nav-sprite-demo.component";
import { marked } from 'marked';
import apiCn from '../doc/api-cn.md?raw';
import apiEn from '../doc/api-en.md?raw';
@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    DevUIApiModule,
    DevUICodeboxModule,
    DDemoNavModule,
    NavSpriteModule,
    RouterModule.forChild([
      {
        path: "",
        redirectTo: "demo",
        pathMatch: "full",
      },
      {
        path: "design",
        component: NavSpriteDesignComponent,
      },
      {
        path: "demo",
        component: NavSpriteDemoComponent,
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
  declarations: [
    NavSpriteDemoComponent,
    NavSpriteDesignComponent,
    BasicComponent,
    ScrollContainerComponent,
  ],
})
export class NavSpriteDemoModule {}
