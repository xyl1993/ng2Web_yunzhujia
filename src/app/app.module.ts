import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule,JsonpModule ,Http} from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {appRoutes} from './app.routes';
@NgModule({
  declarations: [                 // 声明本模块中拥有的视图类
    AppComponent
  ],
  imports: [                //本模块声明的组件模板需要的类所在的其它模块。
    BrowserModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],             //存放服务类
  bootstrap: [AppComponent]          // 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性。
})
export class AppModule { }
